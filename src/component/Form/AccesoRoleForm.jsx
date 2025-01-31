import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DBContext } from "../../context/DBContext";
import CmbEntity from "./Control/CmbEntity";
import CheckSiNo from "./Control/CheckSiNo";

function AccesoRoleForm() {
  const location = useLocation();
  const fromRole = location.pathname.includes("/role/");
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);
  const [lista, setLista] = useState([]);
  const valorVacio = {
    id: "",
    role: {
      id: fromRole ? dBCtx.actual?.role?.id : "",
      nombre: fromRole ? dBCtx.actual?.role?.nombre : "",
    },
    acceso: {
      id: fromRole ? "" : dBCtx.actual?.acceso?.id,
      nombre: fromRole ? "" : dBCtx.actual?.acceso?.nombre,
    },
    snModifica: "N",
  };

  const valorInicial = dBCtx.actual || valorVacio;

  useEffect(() => {
    setLista(
      dBCtx.lista.map((accesoRole) =>
        fromRole ? accesoRole?.acceso?.id : accesoRole?.role?.id
      )
    );
  }, [dBCtx.lista, fromRole]);

  return (
    <>
      <CmbEntity
        nombreEntidad={fromRole ? "acceso" : "role"}
        value={fromRole ? valorInicial?.acceso?.id : valorInicial?.role?.id}
        onChange={dBCtx.fnOnChange}
        listaIdDisabled={lista}
      />
      <CheckSiNo
        title={t("modifica")}
        value={valorInicial.snModifica}
        onChange={dBCtx.fnOnChange}
        name="snModifica"
      />
    </>
  );
}

export default AccesoRoleForm;
