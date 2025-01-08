import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../context/DBContext";
import "../style/GeneralForm.css";
import { useTranslation } from "react-i18next";

function GeneralEntity({
  ComponenteForm,
  ComponenteLista,
  tituloEntidad,
  nombreEntidad,
  children,
}) {
  const { t } = useTranslation();

  const dBCtx = useContext(DBContext);
  const [parentData, setParentData] = useState(null);
  const [currentEntity, setCurrentEntity] = useState({
    ComponenteForm: ComponenteForm,
    ComponenteLista: ComponenteLista,
    tituloEntidad: tituloEntidad,
    nombreEntidad: nombreEntidad,
    actual: null,
  });

  const entityChildren = children ? React.Children.toArray(children) : [];

  useEffect(() => {
    dBCtx.consultar(currentEntity.nombreEntidad);
  }, []);

  const cancelAction = (e) => {
    e.preventDefault();
    dBCtx.setActual(null);
  };

  const showParent = () => {
    console.log("showParent -> parentData", parentData);
    if (parentData) {
      setCurrentEntity(parentData);
      setParentData(null);
      dBCtx.consultar(parentData.nombreEntidad);
      dBCtx.setActual(parentData.actual);
    }
  };

  const showChild = (index) => {
    const selectedChild = entityChildren[index];
    if (React.isValidElement(selectedChild)) {
      const childEntityName = `${dBCtx.entidad}/${dBCtx.actual.id}/${selectedChild.props.nombreEntidad}`;

      setParentData({ ...currentEntity, actual: dBCtx.actual });

      setCurrentEntity({
        ComponenteForm: selectedChild.props.ComponenteForm,
        ComponenteLista: selectedChild.props.ComponenteLista,
        tituloEntidad: selectedChild.props.tituloEntidad,
        nombreEntidad: childEntityName,
        actual: null,
      });

      dBCtx.consultar(childEntityName);
      dBCtx.setActual(null);
    }
  };

  const {
    ComponenteForm: CurrentForm,
    ComponenteLista: CurrentList,
    tituloEntidad: currentTitle,
  } = currentEntity;

  return (
    <div>
      <h1>{currentTitle}</h1>
      {parentData?.actual?.nombre && <h2>{parentData.actual.nombre}</h2>}
      <form className="principal-form">
        <CurrentForm valorInicial={dBCtx.actual} />
        <div>
          <button type="button" onClick={cancelAction}>
            {t("Descartar")}
          </button>

          <button type="button" onClick={dBCtx.guardarActual}>
            {dBCtx.actual?.id ? t("Actualizar") : t("Crear")}
          </button>

          {dBCtx.actual && (
            <button type="button" onClick={dBCtx.borrarActual}>
              {t("Eliminar")}
            </button>
          )}
          {parentData && (
            <button type="button" onClick={() => showParent()}>
              {t("Volver")}
            </button>
          )}
          {!parentData &&
            dBCtx.actual?.id &&
            entityChildren.map((child, index) =>
              React.isValidElement(child) ? (
                <button
                  key={child.props.nombreEntidad || index}
                  type="button"
                  onClick={() => showChild(index)}
                >
                  {child.props.tituloEntidad} {"=>"}
                </button>
              ) : null
            )}
        </div>
      </form>
      {dBCtx.loading ? (
        <p>{t("CargandoDatos")} </p>
      ) : dBCtx.error ? (
        <p>{dBCtx.error}</p>
      ) : dBCtx.lista.length > 0 ? (
        <CurrentList />
      ) : (
        <h5>{t("NoDatos")}</h5>
      )}
    </div>
  );
}

export default GeneralEntity;
