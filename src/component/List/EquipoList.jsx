import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function EquipoList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de equipos */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
            <th>{t("Categoria")}</th>
            <th>{t("Seccion")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((equipo) => (
            <tr key={equipo.id} onClick={() => dBCtx.setActual(equipo)}>
              <td>{equipo?.nombre}</td>
              <td>{equipo?.categoria?.nombre}</td>
              <td>{equipo?.seccion?.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipoList;
