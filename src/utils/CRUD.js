// El fichero .env existe al mismo nivel que package.json
const apiURL = import.meta.env.VITE_API_URL;

export const consultar = async (
  jwtToken,
  nombreEntidad,
  setLista,
  setLoading,
  setError
) => {
  setLoading(true);
  setError(null);
  try {
    const respuesta = await fetch(apiURL + nombreEntidad, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }
    const data = await respuesta.json();
    setLista(data);
  } catch (error) {
    setError(`Error al cargar los datos: ${error.message}`);
  } finally {
    setLoading(false);
  }
};

export const guardar = async (nombreEntidad, objeto, setError) => {
  const urlServicio =
    apiURL + nombreEntidad + (objeto.id != "" ? "/" + objeto.id : "");
  const method = objeto.id != "" ? "PUT" : "POST";
  try {
    const respuesta = await fetch(urlServicio, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(objeto),
    });

    if (!respuesta.ok) {
      // Intentar leer el JSON del cuerpo
      const errorData = await respuesta.json();
      throw new Error(errorData?.descripcion);
    }
    setError("");
  } catch (error) {
    setError(error);
  }
};

export const borrar = async (nombreEntidad, id, setError) => {
  try {
    const respuesta = await fetch(`${apiURL + nombreEntidad}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }
    // Se alterna el valor para indicar que ha ocurrido un cambio en el listado
    setError("");
  } catch (error) {
    setError(error);
  }
};
