import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function TipoNombreForm() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <>
      <div className="grupo-item">
        <label htmlFor="nombre">{t("Nombre")}:</label>
        <input
          type="text"
          name="nombre"
          value={dBCtx?.actual?.nombre ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Nombre")}
        />
      </div>
    </>
  );
}

export default TipoNombreForm;
