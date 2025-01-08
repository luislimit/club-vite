import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CheckSiNo from "./Control/CheckSiNo";

function RoleForm() {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    nombre: "",
    snEquipo: "",
    snVinculado: "",
    snLectura: "",
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
        title="Equipo"
        value={valorInicial.snEquipo}
        onChange={dBCtx.fnOnChange}
        name="snEquipo"
      />

      <CheckSiNo
        title="snVinculado"
        value={valorInicial.snVinculado}
        onChange={dBCtx.fnOnChange}
        name="snVinculado"
      />

      <CheckSiNo
        title="snLectura"
        value={valorInicial.snLectura}
        onChange={dBCtx.fnOnChange}
        name="snLectura"
      />
    </>
  );
}

export default RoleForm;
