import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../style/Menu.css";
import Logo from "../image/club-logo.png"
import { useTranslation } from "react-i18next";

function Menu() {

  const { t } = useTranslation();

  const usuarioCtx = useContext(UsuarioContext);

  return (
    <div className="menu-container">
      <img className="menu-logo" src={Logo} alt="Club Logo" />
      <nav>
        <ul className="menu-list">
          <li><Link to="/">{t("Inicio")}</Link></li>
          {usuarioCtx.usuario ?  
          (
          <li>
          {t("Mantenimiento")}
            <ul className="submenu">
             <li>
              {t("Maestros")}
                <ul className="submenu">
                  <li><Link to="/role">{t("Roles")}</Link></li>
                  <li><Link to="/tipoEvento">{t("TipoEvento")}</Link></li>
                  <li><Link to="/categoria">{t("Categorias")}</Link></li>
                </ul>
              </li>
              <li><Link to="/instalacion">{t("Instalaciones")}</Link></li>
              <li><Link to="/equipo">{t("Equipos")}</Link></li>
              <li><Link to="/persona">{t("Personas")}</Link></li>
            </ul>
          </li>
          ): null}
          {usuarioCtx.usuario ? (
            <li><Link to="/logout">{t("Desconectar") + " " + usuarioCtx.usuario.nombre}</Link></li>
          ) : (
            <li><Link to="/login">{t("Conectar")}</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

