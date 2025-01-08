import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function PersonaRoleList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Roles")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((personaRole) => (
            <tr
              key={personaRole.id}
              onClick={() => dBCtx.setActual(personaRole)}
            >
              <td>{personaRole.role.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonaRoleList;
