import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function CategoriaForm() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    nombre: "",
    edadMinima: "",
    edadMaxima: "",
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
        <label htmlFor="edadMinima">{t("EdadMin")}:</label>
        <input
          type="number"
          name="edadMinima"
          value={valorInicial.edadMinima}
          onChange={dBCtx.fnOnChange}
          placeholder={t("EdadMin")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="edadMaxima">{t("EdadMax")}:</label>
        <input
          type="number"
          name="edadMaxima"
          value={valorInicial.edadMaxima}
          onChange={dBCtx.fnOnChange}
          placeholder={t("EdadMax")}
        />
      </div>
    </>
  );
}

export default CategoriaForm;
