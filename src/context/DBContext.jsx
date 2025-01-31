import React, { useEffect, createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

export const DBContext = createContext({
  lista: [],
  actual: null,
  setActual: () => Promise.resolve(),
  consultar: () => Promise.resolve(),
  guardar: () => Promise.resolve(false),
  borrar: () => Promise.resolve(false),
});

export function DBContextProvider({ children }) {
  const [lista, setLista] = useState([]);
  const [actual, setActual] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null); // Inicializar como null

  const apiURL = import.meta.env.VITE_API_URL;
  const clubURL = apiURL + "club/";

  const iniciarSesion = useCallback(
    async (credenciales) => {
      try {
        const authURL = apiURL + "auth/login";
        setError(null); // Limpiar errores previos
        const respuesta = await fetch(authURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credenciales),
        });

        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }

        const persona = await respuesta.json();
        if (!persona.nombre) {
          throw new Error("Datos incorrectos");
        }
        console.log("iniciarSecion", persona);
        setUsuario(persona);
        localStorage.setItem("usuario", JSON.stringify(persona)); // Guardar usuario en localStorage
        return true;
      } catch (error) {
        setError("Error al iniciar sesión");
        console.log(
          `UsuarioContext.iniciarSesion ${authURL}`,
          credenciales,
          error
        );
        return false;
      }
    },
    [apiURL]
  );

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem("usuario"); // Limpiar del almacenamiento
  };

  useEffect(() => {
    // Recuperar usuario del almacenamiento al cargar
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  const fnOnError = (msg) => {
    alert(msg);
  };

  const consultaEntidad = useCallback(
    async (urlEntidad, setListaEntity) => {
      const actionURL = clubURL + urlEntidad;
      console.log(`DBContext.consultaEntidad ${actionURL}`);
      try {
        const respuesta = await fetch(actionURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario?.jwtToken}`,
          },
        });

        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        setListaEntity(data);
        console.log(`consultaEntidad ${urlEntidad}`, setListaEntity, data);
      } catch (error) {
        console.log(`consultaEntidad ${actionURL}`, error);
        fnOnError(error);
      }
    },
    [clubURL, usuario?.jwtToken]
  );

  const consultar = useCallback(
    async (nombreEntidad) => {
      const actionURL = clubURL + nombreEntidad;
      console.log(`DBContext.consultar ${actionURL}`);
      setLoading(true);
      setError(null);
      try {
        const respuesta = await fetch(actionURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario?.jwtToken}`,
          },
        });

        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        setLista(data);
      } catch (error) {
        setError(`Error al cargar los datos: ${error.message}`);
        console.log(`DBContext.consultar ${actionURL}`, error);
      } finally {
        setLoading(false);
      }
    },
    [clubURL, usuario?.jwtToken, setLoading, setError]
  );

  const guardar = async (entidadDML, objeto) => {
    const actionURL =
      clubURL + entidadDML + (objeto?.id ? "/" + objeto.id : "");
    const method = objeto?.id ? "PUT" : "POST";
    console.log("AL GUARDAR => " + JSON.stringify(objeto));
    try {
      const respuesta = await fetch(actionURL, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.jwtToken}`,
        },
        body: JSON.stringify(objeto),
      });
      if (!respuesta.ok) {
        //throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        // Intentar leer el JSON del cuerpo
        const errorData = await respuesta.json();
        throw new Error("Respuesta NOT OK =>" + errorData?.descripcion);
      }
      setActual(null);
    } catch (error) {
      console.log(`DBContext.guardar ${actionURL}`, error);
      fnOnError(error);
    }
  };

  const borrar = async (entidadDML, id) => {
    const actionURL = clubURL + entidadDML + "/" + id;
    try {
      const respuesta = await fetch(actionURL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.jwtToken}`,
        },
      });
      if (!respuesta.ok) {
        throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
      }
      setActual(null);
    } catch (error) {
      fnOnError(error);
      console.log(`DBContext.borrar ${actionURL}`, error);
    }
  };

  // Función para manejar los cambios en los inputs
  const fnOnChange = (e) => {
    const { name, type, checked, value } = e.target;

    let newName = name;
    let newValue = value;

    // Preparar el nuevo campo para actualizar
    if (type === "checkbox") {
      newValue = checked ? "S" : "N";
    } else if (type === "select-one") {
      if (name.startsWith("_")) {
        newName = name.slice(1);
      } else {
        newValue = { id: value };
      }
    }
    //console.log("DBContextProvider.fnOnChange", type, newName, newValue);
    // Actualizar el estado
    setActual({
      ...actual,
      [newName]: newValue,
    });
  };

  const contextValue = {
    usuario,
    iniciarSesion,
    cerrarSesion,
    lista,
    error,
    loading,
    actual,
    setActual,
    consultar,
    guardar,
    borrar,
    fnOnChange,
    consultaEntidad,
  };

  return (
    <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
  );
}

// Definición de PropTypes
DBContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
