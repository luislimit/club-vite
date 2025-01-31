import { Link } from "react-router-dom";
import { useContext } from "react";
import { DBContext } from "../context/DBContext";
import "../style/Menu.css";
import Logo from "../image/club-logo.png";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);

  return (
    <div className="menu-container">
      <Link to="/">
        <img className="menu-logo" src={Logo} alt={t("Inicio")} />
      </Link>
      <nav>
        <ul className="menu-list">
          <li>
            <Link to="/">{t("Inicio")}</Link>
          </li>
          {dBCtx.usuario ? (
            <>
              <li>
                {t("configuración")}
                <ul className="submenu">
                  <li>
                    <Link to="/acceso">{t("acceso")}</Link>
                  </li>
                  <li>
                    <Link to="/role">{t("Roles")}</Link>
                  </li>
                  <li>
                    <Link to="/idioma">{t("idioma")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Maestros")}
                <ul className="submenu">
                  <li>
                    <Link to="/tipoEvento">{t("TipoEvento")}</Link>
                  </li>
                  <li>
                    <Link to="/categoria">{t("Categorias")}</Link>
                  </li>
                  <li>
                    <Link to="/nivelEntrenador">{t("nivelEntrenador")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Mantenimiento")}
                <ul className="submenu">
                  <li>
                    <Link to="/instalacion">{t("Instalaciones")}</Link>
                  </li>
                  <li>
                    <Link to="/equipo">{t("Equipos")}</Link>
                  </li>
                  <li>
                    <Link to="/persona">{t("Personas")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Gestión")}
                <ul className="submenu">
                  <li>
                    <Link to="/tipoLesion">{t("tipoLesiones")}</Link>
                  </li>
                  <li>
                    <Link to="/personaLesion">{t("Lesiones")}</Link>
                  </li>
                  <li>
                    <Link to="/eventos">{t("Eventos")}</Link>
                  </li>
                </ul>
              </li>
            </>
          ) : null}
          {dBCtx.usuario ? (
            <li>
              <Link to="/logout">
                {t("Desconectar") + " " + dBCtx.usuario.nombre}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">{t("Conectar")}</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
