import { useTranslation } from "react-i18next";

function CheckSiNo({ title, value, onChange, name }) {
  const { t } = useTranslation();

  return (
    <div className="grupo-item">
      <label htmlFor={name}>{t(title)}:</label>
      <input
        type="checkBox"
        name={name}
        checked={value === "S"}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckSiNo;
