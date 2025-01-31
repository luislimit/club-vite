import { useContext, useEffect, useState } from "react";
import { DBContext } from "../context/DBContext";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const dBCtx = useContext(DBContext);
  const [idioma, setIdioma] = useState(localStorage.getItem("idioma") || "es");

  useEffect(() => {
    i18n.changeLanguage(idioma); // Cambia el idioma
  }, [idioma]);

  const changeLanguage = () => {
    const lng = idioma === "es" ? "en" : "es";
    localStorage.setItem("idioma", lng); // Guardar idioma en localStorage
    setIdioma(lng);
  };

  return (
    <div>
      <h2>{t("PaginaInicio")}</h2>
      {dBCtx.usuario ? (
        <div>
          <p>
            {t("Bienvenido")}, {dBCtx.usuario.nombre}
          </p>
        </div>
      ) : null}
      <h1>{t("InformacionGeneral")}</h1>
      <button onClick={changeLanguage}>{t("CambiaIdioma")}</button>
    </div>
  );
}

export default Home;
