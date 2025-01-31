import { useEffect, useState, useContext } from "react";
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
    apellido2: "",
    documento: "",
    sexo: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
  };

  const [valorInicial, setValorInicial] = useState("");

  useEffect(() => {
    setValorInicial(dBCtx.actual || valorVacio);
  }, [dBCtx.actual]);

  return (
    <>
      <div className="grupo-item">
        <label htmlFor="nombre">{t("Nombre")}:</label>
        <input
          type="text"
          name="nombre"
          value={valorInicial.nombre ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Nombre")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="apellido1">{t("Apellido1")}:</label>
        <input
          type="text"
          name="apellido1"
          value={valorInicial.apellido1 ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Apellido1")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="apellido2">{t("Apellido2")}:</label>
        <input
          type="text"
          name="apellido2"
          value={valorInicial.apellido2 ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Apellido2")}
        />
      </div>

      <div className="grupo-item">
        <label htmlFor="documento">{t("Documento")}:</label>
        <input
          type="text"
          name="documento"
          value={valorInicial.documento ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("Documento")}
        />
      </div>
      <CmbSexo value={valorInicial.sexo} onChange={dBCtx.fnOnChange} />
      <div className="grupo-item">
        <label htmlFor="fechaNacimiento">{t("fechaNacimiento")}:</label>
        <input
          type="text"
          name="fechaNacimiento"
          value={valorInicial?.fechaNacimiento ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("fechaNacimiento")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="telefono">{t("telefono")}:</label>
        <input
          type="text"
          name="telefono"
          value={valorInicial?.telefono ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("telefono")}
        />
      </div>
      <div className="grupo-item">
        <label htmlFor="correoElectronico">{t("correoElectronico")}:</label>
        <input
          type="text"
          name="correoElectronico"
          value={valorInicial.correoElectronico ?? ""}
          onChange={dBCtx.fnOnChange}
          placeholder={t("correoElectronico")}
        />
      </div>
    </>
  );
}

export default PersonaForm;
