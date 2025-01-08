import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function PersonaList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de personas */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
            <th>{t("Apellido1")}</th>
            <th>{t("Documento")}</th>
            <th>{t("Sexo")}</th>
            <th>{t("FechaNacimiento")}</th>
            <th>{t("Telefono")}</th>
            <th>{t("Email")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((persona) => (
            <tr key={persona.id} onClick={() => dBCtx.setActual(persona)}>
              <td>{persona.nombre}</td>
              <td>{persona.apellido1}</td>
              <td>{persona.documento}</td>
              <td>{persona.sexo === "M" ? t("Masculino") : t("Femenino")}</td>
              <td>{persona.fecha}</td>
              <td>{persona.telefono}</td>
              <td>{persona.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonaList;
