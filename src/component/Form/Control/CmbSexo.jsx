import { useTranslation } from "react-i18next";

function CmbSexo({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <div className="grupo-item">
      <label htmlFor="sexo">{t("Sexo")}:</label>
      <select id="sexo" name="sexo" value={value} onChange={onChange}>
        <option value="F">{t("Femenino")}</option>
        <option value="M">{t("Masculino")}</option>
      </select>
    </div>
  );
}

export default CmbSexo;
