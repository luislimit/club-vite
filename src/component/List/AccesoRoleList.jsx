import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function AccesoRoleList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);
  const location = useLocation();
  const fromRole = location.pathname.includes("/role/");

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t(fromRole ? "acceso" : "role")}</th>
            <th>{t("Modificar")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((accesoRole) => (
            <tr key={accesoRole.id} onClick={() => dBCtx.setActual(accesoRole)}>
              <td>
                {fromRole
                  ? accesoRole?.acceso?.nombre
                  : accesoRole?.role?.nombre}
              </td>
              <td>{accesoRole.snModifica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccesoRoleList;
