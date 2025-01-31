import { useTranslation } from "react-i18next";

function CmbSexo({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <div className="grupo-item">
      <label htmlFor="_sexo">{t("Sexo")}:</label>
      <select id="_sexo" name="_sexo" value={value} onChange={onChange}>
        <option value="F">{t("Femenino")}</option>
        <option value="M">{t("Masculino")}</option>
      </select>
    </div>
  );
}

export default CmbSexo;
