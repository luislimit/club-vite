import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function InstalacionForm() {
  const { t } = useTranslation();

  const valorVacio = {
    id: "",
    nombre: "",
    direccion: "",
    codPostal: "",
  };

  const dBCtx = useContext(DBContext);

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
        <label htmlFor="direccion">{t("Direccion")}:</label>
        <input
          type="text"
          name="direccion"
          value={valorInicial.direccion}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Direccion")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="codPostal">{t("CodigoPostal")}:</label>
        <input
          type="text"
          name="codPostal"
          value={valorInicial.codPostal}
          onChange={dBCtx.fnOnChange}
          placeholder={t("CodigoPostal")}
        />
      </div>
    </>
  );
}

export default InstalacionForm;
