import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CheckSiNo from "./Control/CheckSiNo";

function PistaForm() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    nombre: "",
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
      <CheckSiNo
        title={t("Mini")}
        value={valorInicial.snMini}
        onChange={dBCtx.fnOnChange}
        name="snMini"
      />
      <CheckSiNo
        title={t("Normal")}
        value={valorInicial.snNormal}
        onChange={dBCtx.fnOnChange}
        name="snNormal"
      />
      <CheckSiNo
        title={t("Exterior")}
        value={valorInicial.snExterior}
        onChange={dBCtx.fnOnChange}
        name="snExterior"
      />
    </>
  );
}

export default PistaForm;
