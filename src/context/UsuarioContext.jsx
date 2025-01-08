import { createContext, useState, useEffect, useCallback } from "react";

export const UsuarioContext = createContext();

export function UsuarioContextProvider(props) {
  const [usuario, setUsuario] = useState(null); // Inicializar como null
  const [error, setError] = useState(null);

  const urlServicio = import.meta.env.VITE_API_URL_AUTH;

  const iniciarSesion = useCallback(
    async (credenciales) => {
      try {
        setError(null); // Limpiar errores previos
        const respuesta = await fetch(urlServicio, {
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
          `UsuarioContext.iniciarSesion ${urlServicio}`,
          credenciales,
          error
        );
        return false;
      }
    },
    [urlServicio]
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

  return (
    <UsuarioContext.Provider
      value={{ usuario, error, iniciarSesion, cerrarSesion }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
}
