import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../context/DBContext";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/GeneralForm.css";
import { fnEntidadNombre } from "../utils/Funciones.js";

function GeneralEntity({
  ComponenteForm,
  ComponenteLista,
  tituloEntidad,
  childEntities = [],
}) {
  const { t } = useTranslation();

  const location = useLocation();
  const currentUrl = location.pathname.substring(1);
  const [urlDML, setUrlDML] = useState(currentUrl);
  const [entityParent, setEntityParent] = useState("");
  const [objParent, setObjParent] = useState("");
  const [datosCargados, setDatosCargados] = useState(false);

  const navigate = useNavigate();
  const dBCtx = useContext(DBContext);

  // Cargamos los datos iniciales del padre, si viene de una URL padre
  useEffect(() => {
    dBCtx.setActual(null);
    const splitUrl = currentUrl.split("/");
    if (splitUrl.length === 3) {
      setUrlDML(splitUrl[0]);
      setEntityParent(splitUrl[1]);
      dBCtx.consultaEntidad(`${splitUrl[1]}/${splitUrl[2]}`, setObjParent);
    } else {
      setUrlDML(currentUrl);
    }
  }, [currentUrl]);

  // Consultamos los datos de la entidad actual
  useEffect(() => {
    if (!dBCtx.actual) {
      dBCtx.consultar(currentUrl);
      //Comprobamos si el objeto Padre y hay informacion, implica que viene del hijo
      const datosPadre = location.state?.currentObject;
      if (!datosCargados && childEntities.length > 0 && datosPadre) {
        dBCtx.setActual(datosPadre);
        //
        setDatosCargados(true);
      }
    }
  }, [currentUrl, dBCtx.actual, datosCargados]);

  // Al presionar el botón descartar cambios
  const cancelAction = (e) => {
    e.preventDefault();
    dBCtx.setActual(null);
  };

  // Navegar de regreso al padre, si existiera
  const goBackToParent = () => {
    if (entityParent && objParent) {
      navigate(`/${entityParent}`, { state: { currentObject: objParent } });
    }
  };

  const goToChild = (id) => {
    navigate(`/${childEntities[id]}/${currentUrl}/${dBCtx.actual.id}`);
  };

  const guardar = () => {
    if (objParent && !dBCtx.actual?.id) {
      const nuevo = {
        ...dBCtx.actual,
        [entityParent]: { id: objParent.id },
      };
      dBCtx.guardar(urlDML, nuevo);
    } else {
      dBCtx.guardar(urlDML, dBCtx.actual);
    }
  };

  const borrar = () => {
    dBCtx.borrar(urlDML, dBCtx.actual.id);
  };

  return (
    <div>
      <h1>{t(tituloEntidad)}</h1>
      {childEntities.length === 0 && objParent?.id > 0 ? (
        <a onClick={goBackToParent}>
          {fnEntidadNombre(entityParent, objParent)}
        </a>
      ) : (
        ""
      )}
      <form className="principal-form">
        <ComponenteForm valorInicial={dBCtx.actual} objParent={objParent} />
        <div>
          <button type="button" onClick={cancelAction}>
            {t("Descartar")}
          </button>

          <button type="button" onClick={guardar}>
            {dBCtx.actual?.id ? t("Actualizar") : t("Crear")}
          </button>

          {dBCtx.actual?.id && (
            <button type="button" onClick={borrar}>
              {t("Eliminar")}
            </button>
          )}
          {dBCtx.actual?.id &&
            childEntities.map((child, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToChild(index)}
              >
                {child + "=>"}
              </button>
            ))}
        </div>
      </form>
      {dBCtx.loading ? (
        <p>{t("CargandoDatos")} </p>
      ) : dBCtx.error ? (
        <p>{dBCtx.error}</p>
      ) : dBCtx.lista.length > 0 ? (
        <ComponenteLista />
      ) : (
        <h5>{t("NoDatos")}</h5>
      )}
    </div>
  );
}

export default GeneralEntity;
