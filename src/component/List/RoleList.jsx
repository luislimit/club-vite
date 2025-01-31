import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function RoleList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
            <th>{t("tipoRole")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((objeto) => {
            const role = objeto.role ? objeto.role : objeto;
            return (
              <tr key={role.id} onClick={() => dBCtx.setActual(role)}>
                <td>{role?.nombre}</td>
                <td>{role?.tipoRole?.nombre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RoleList;
