import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CmbSexo from "./Control/CmbSexo";

function PersonaForm() {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    nombre: "",
    apellido1: "",
    documento: "",
    sexo: "",
  };

  const valorInicial = dBCtx.actual || valorVacio;

  return (
    <>
      <div className="grupo-item">
        <label htmlFor="nombre">{t("Nombre")}:</label>
        <input
          type="text"
          name="nombre"
          value={valorInicial.nombre}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Nombre")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="apellido1">{t("Apellido1")}:</label>
        <input
          type="text"
          name="apellido1"
          value={valorInicial.apellido1}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Apellido1")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="documento">{t("Documento")}:</label>
        <input
          type="text"
          name="documento"
          value={valorInicial.documento}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Documento")}
        />
      </div>
      <CmbSexo value={valorInicial.sexo} onChange={dBCtx.fnOnChange} />
    </>
  );
}

export default PersonaForm;
