import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function PistaList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);
  return (
    <div>
      {/* Tabla para mostrar la lista de categorias */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t('Nombre')}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((pista) => (
            <tr key={pista.id}
            onClick={() => dBCtx.setActual(pista)}
             >
              <td>{pista.nombre}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PistaList;