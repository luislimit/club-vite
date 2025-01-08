const urlServicio = "http://localhost:4000/";

// Definimos obtenerDatos con useCallback para que su referencia sea estable
export const find = async (nomEntidad, id) => {
  console.log("obtenerPadre -> Obteniendo datos de " + urlPadre);
  try {
    const url = urlServicio + '/' + nomEntidad + id;
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos desde " + urlPadre + ": ", error);
    return null;
  }
}; //

// Definimos obtenerDatos con useCallback para que su referencia sea estable
export const findAll = useCallback(async (nomEntidad) => {
  console.log("obtenerLista -> Obteniendo datos de " + nombreEntidad);
  setLoading(true);
  setError(null);
  try {
    const url = urlServicio + '/' + nomEntidad;
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setLista(data);
    console.log("obtenerLista -> Se ha recuperado con éxito:", data);
    setLoading(false);
  } catch (error) {
    console.error("Error al obtener datos de " + nombreEntidad + ": ", error);
    setError("Error al cargar los datos.");
    setLoading(false);
  }
}, [nombreEntidad, urlEntidad]); //

useEffect(() => {
  if (isChild) {
    obtenerPadre();
  }
  obtenerLista();
}, [isChild, obtenerPadre, obtenerLista]); // Incluimos obtenerLista en las dependencias

const guardar = async (objeto) => {
  try {
    const respuesta = await fetch(urlEntidad, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    });

    if (respuesta.ok) {
      const data = await respuesta.json();
      console.log("Se ha guardado con éxito:", data);
      obtenerLista();
      return true;
    } else {
      console.error("Se ha producido un error al guardar");
      return false;
    }
  } catch (error) {
    console.error("Error al hacer la petición POST:", error);
    return false;
  }
};

const borrar = async (id) => {
  try {
    const respuesta = await fetch(`${urlEntidad}/${id}`, {
      method: "DELETE",
    });

    if (respuesta.ok) {
      console.log("Se ha eliminado con éxito:", id);
      obtenerLista();
      return true;
    } else {
      console.error("Se ha producido un error al borrar:", id);
      return false;
    }
  } catch (error) {
    console.error("Error al hacer la petición DELETE:", error);
    return false;
  }
};
