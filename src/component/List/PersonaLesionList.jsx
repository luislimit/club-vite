import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import { fnPersonaNombre } from "../../utils/Funciones";

function PersonaLesionList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de roles */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Persona")}</th>
            <th>{t("TipoLesion")}</th>
            <th>{t("FechaInicio")}</th>
            <th>{t("FechaFinPrevista")}</th>
            <th>{t("FechaFin")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((personaLesion) => (
            <tr
              key={personaLesion.id}
              onClick={() => dBCtx.setActual(personaLesion)}
            >
              <td>{fnPersonaNombre(personaLesion?.persona)}</td>
              <td>{personaLesion?.tipoLesion?.nombre}</td>
              <td>{personaLesion?.fechaInicio}</td>
              <td>{personaLesion?.fechaFinEstimada}</td>
              <td>{personaLesion?.fechaFin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonaLesionList;
