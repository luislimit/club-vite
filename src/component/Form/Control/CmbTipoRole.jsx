import { useTranslation } from "react-i18next";

function CmbTipoRole({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <div className="grupo-item">
      <label for="role">{t("Role")}:</label>
      <select id="role" name="role" value={value} onChange={onChange}>
        <option value="E">{t("Equipos")}</option>
        <option value="G">{t("General")}</option>
        <option value="P">{t("Personas")}</option>
      </select>
    </div>
  );
}

export default CmbTipoRole;
