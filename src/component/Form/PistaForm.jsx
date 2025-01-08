import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function PistaForm() {
  const { t } = useTranslation();

  const valorVacio = {
    id: "",
    nombre: "",
  };

  const dBCtx = useContext(DBContext);

  const valorInicial = dBCtx.actual || valorVacio;

  return (
    <>
      <div className="grupo-item">
        <label htmlFor="nombre">{t('Nombre')}:</label>
        <input
          type="text"
          name="nombre"
          value={valorInicial.nombre}
          onChange={dBCtx.fnOnChange}
          placeholder={t('Nombre')}
        />
      </div>
    </>
  );
}

export default PistaForm;
