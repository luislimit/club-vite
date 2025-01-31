export const fnPersonaNombre = (persona) =>
  persona?.nombre + " " + persona?.apellido1 + " " + persona?.apellido2;

export const fnEquipoNombre = (equipo) =>
  equipo?.categoria?.nombre +
  " " +
  equipo?.seccion?.nombre +
  " " +
  equipo?.nombre;

export const fnNombre = (objeto) => objeto?.nombre;

export const fnEntidadNombre = (entidad, objeto) => {
  if (entidad.startsWith("personaRole/role/")) {
    return fnPersonaNombre(objeto.persona);
  }
  switch (entidad) {
    case "persona":
      return fnPersonaNombre(objeto);
    case "equipo":
      return fnEquipoNombre(objeto);
    default:
      return fnNombre(objeto);
  }
};

export const fnEdad = (fechaTexto) => {
  if (!fechaTexto) {
    return "";
  }
  // Dividir la fecha de entrada (dd/mm/yyyy)
  const [dia, mes, año] = fechaTexto.split("/").map(Number);

  // Crear objeto de fecha a partir de la entrada
  const fechaNacimiento = new Date(año, mes - 1, dia);

  // Obtener la fecha actual
  const hoy = new Date();

  // Calcular la edad
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  /*
  // Ajustar si aún no ha pasado el cumpleaños este año
  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  if (mesActual < mes - 1 || (mesActual === mes - 1 && diaActual < dia)) {
    edad--;
  }
*/
  return edad;
};
