import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CmbEntity from "./Control/CmbEntity";

function PersonaLesionForm() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);
  const valorVacio = {
    id: "",
    persona: { id: "", nombre: "" },
  };

  const valorInicial = dBCtx.actual || valorVacio;

  return (
    <>
      <CmbEntity
        nombreEntidad={"persona/tipoRole/3"}
        value={valorInicial?.persona?.id}
        onChange={dBCtx.fnOnChange}
      />
      <CmbEntity
        nombreEntidad={"tipoLesion"}
        value={valorInicial?.tipoLesion?.id}
        onChange={dBCtx.fnOnChange}
      />
      <div className="grupo-item">
        <label htmlFor="fechaInicio">{t("fechaInicio")}:</label>
        <input
          type="text"
          name="fechaInicio"
          value={valorInicial?.fechaInicio ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("fechaInicio")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="fechaFinEstimada">{t("fechaFinEstimada")}:</label>
        <input
          type="text"
          name="fechaFinEstimada"
          value={valorInicial?.fechaFinEstimada ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("fechaFinEstimada")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="fechaFin">{t("fechaFin")}:</label>
        <input
          type="text"
          name="fechaFin"
          value={valorInicial?.fechaFin ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("fechaFin")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="observaciones">{t("observaciones")}:</label>
        <input
          type="text"
          name="observaciones"
          value={valorInicial?.observaciones ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("observaciones")}
        />
      </div>
    </>
  );
}

export default PersonaLesionForm;
