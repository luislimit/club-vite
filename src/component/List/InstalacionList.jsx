import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function InstalacionList() {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);
  return (
    <div>
      {/* Tabla para mostrar la lista de instalacions */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
            <th>{t("Direccion")}</th>
            <th>{t("CodigoPostal")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((instalacion) => (
            <tr
              key={instalacion.id}
              onClick={() => dBCtx.setActual(instalacion)}
            >
              <td>{instalacion.nombre}</td>
              <td>{instalacion.direccion}</td>
              <td>{instalacion.codPostal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstalacionList;
