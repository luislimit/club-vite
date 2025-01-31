import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function TipoNombre() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((objeto) => {
            const tipoNombre = objeto;
            return (
              <tr
                key={tipoNombre.id}
                onClick={() => dBCtx.setActual(tipoNombre)}
              >
                <td>{tipoNombre.nombre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TipoNombre;
