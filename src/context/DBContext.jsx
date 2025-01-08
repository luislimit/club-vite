import React, { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsuarioContext } from "./UsuarioContext";

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
  const [entidad, setEntidad] = useState(null);
  const usuarioCtx = useContext(UsuarioContext);

  // El fichero .env existe al mismo nivel que package.json
  const apiURL = import.meta.env.VITE_API_URL || "http://localhost:4001/";

  const consultar = useCallback(
    async (nombreEntidad) => {
      setLoading(true);
      setError(null);
      setEntidad(nombreEntidad);
      const urlServicio = apiURL + nombreEntidad;
      try {
        const respuesta = await fetch(urlServicio, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuarioCtx.usuario?.jwtToken}`,
          },
        });

        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        setLista(data);
      } catch (error) {
        setError(`Error al cargar los datos: ${error.message}`);
        console.log(`DBContext.consultar ${urlServicio}`, error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const guardar = async (objeto) => {
    setLoading(true);
    const urlServicio =
      apiURL + entidad + (objeto.id != null ? "/" + objeto.id : "");
    const method = objeto.id != null ? "PUT" : "POST";
    try {
      const respuesta = await fetch(urlServicio, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuarioCtx.usuario?.jwtToken}`,
        },
        body: JSON.stringify(objeto),
      });

      if (!respuesta.ok) {
        //throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        // Intentar leer el JSON del cuerpo
        const errorData = await respuesta.json();
        throw new Error(errorData?.descripcion);
      }

      await consultar(entidad);
      setActual(null);
      return true;
    } catch (error) {
      setError(`Error al guardar: ${error.message}`);
      console.log(`DBContext.guardar ${urlServicio}`, error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const borrar = async (id) => {
    const urlServicio = apiURL + entidad;
    setLoading(true);
    try {
      const respuesta = await fetch(`${urlServicio}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuarioCtx.usuario?.jwtToken}`,
        },
      });

      if (!respuesta.ok) {
        throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
      }

      await consultar(entidad);
      setActual(null);
      return true;
    } catch (error) {
      setError(`Error al borrar: ${error.message}`);
      console.log(`DBContext.borrar ${urlServicio}/${id}`, error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const guardarActual = () => {
    if (actual) {
      console.log("guardar actual", actual, entidad);
      guardar(actual);
    }
  };

  const borrarActual = () => {
    if (actual) {
      console.log("borrar actual", actual, entidad);
      borrar(actual.id);
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

    console.log("DBContextProvider.fnOnChange", type, newName, newValue);
    // Actualizar el estado
    setActual({
      ...actual,
      [newName]: newValue,
    });
  };

  const contextValue = {
    entidad,
    lista,
    actual,
    error,
    loading,
    consultar,
    guardar,
    borrar,
    setActual,
    guardarActual,
    borrarActual,
    fnOnChange,
  };

  return (
    <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
  );
}

// Definición de PropTypes
DBContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
