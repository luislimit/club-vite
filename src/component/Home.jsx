import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const usuarioCtx = useContext(UsuarioContext);
  const [idioma, setIdioma] = useState(localStorage.getItem("idioma") || "es");

  useEffect(() => {
    i18n.changeLanguage(idioma); // Cambia el idioma
   }, [idioma]);

  const changeLanguage = () => {
    const lng = idioma==="es"?"en":"es";
    localStorage.setItem("idioma", lng); // Guardar idioma en localStorage
    setIdioma(lng);
  };

  console.log("Home.jsx => usuario", usuarioCtx.usuario);
  return (
    <div>
      <h2>{t("PaginaInicio")}</h2>
      {usuarioCtx.usuario ? (
        <div>
          <p>{t("Bienvenido")}, {usuarioCtx.usuario.nombre}</p>
        </div>
      ) : null}
      <h1>{t("InformacionGeneral")}</h1>
      <button onClick={changeLanguage}>{t("CambiaIdioma")}</button>
    </div>
  );
}

export default Home;
