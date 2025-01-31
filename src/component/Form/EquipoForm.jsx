import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CmbEntity from "./Control/CmbEntity";

function EquipoForm() {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    nombre: "",
    categoria: { id: "", nombre: "" },
    seccion: { id: "", nombre: "" },
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

      <CmbEntity
        nombreEntidad="categoria"
        value={valorInicial?.categoria?.id}
        onChange={dBCtx.fnOnChange}
      />

      <CmbEntity
        nombreEntidad="seccion"
        value={valorInicial?.seccion?.id}
        onChange={dBCtx.fnOnChange}
      />
    </>
  );
}

export default EquipoForm;
