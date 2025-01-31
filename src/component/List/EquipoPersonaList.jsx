import { useContext, useEffect, useState } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function EquipoPersonaList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(dBCtx.lista);
  }, [dBCtx.lista]);

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("idEquipoPersona")}</th>
            <th>{t("Roles")}</th>
            <th>{t("Nombre")}</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((equipoPersona) => (
            <tr
              key={equipoPersona.id}
              onClick={() => dBCtx.setActual(equipoPersona)}
            >
              <td>{equipoPersona?.id}</td>
              <td>{equipoPersona?.personaRole?.role?.nombre}</td>
              <td>
                {equipoPersona?.personaRole?.persona?.nombre +
                  " " +
                  equipoPersona?.personaRole?.persona?.apellido1 +
                  " " +
                  equipoPersona?.personaRole?.persona?.apellido2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipoPersonaList;
