import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DBContext } from "../../context/DBContext";
import CmbEntity from "./Control/CmbEntity";

function PersonaRoleForm() {
  const location = useLocation();
  const fromRole = location.pathname.includes("/role/");
  const dBCtx = useContext(DBContext);
  const [lista, setLista] = useState([]);

  const valorVacio = {
    id: "",
    role: {
      id: "",
      nombre: "",
    },
    persona: {
      id: "",
      nombre: "",
    },
  };

  const valorInicial = dBCtx.actual || valorVacio;

  useEffect(() => {
    setLista(
      dBCtx.lista.map((personaRole) =>
        fromRole ? personaRole?.persona?.id : personaRole?.role?.id
      )
    );
  }, [dBCtx.lista, fromRole]);

  return (
    <>
      <CmbEntity
        nombreEntidad={fromRole ? "persona" : "role"}
        value={fromRole ? valorInicial?.persona?.id : valorInicial?.role?.id}
        onChange={dBCtx.fnOnChange}
        listaIdDisabled={lista}
      />
    </>
  );
}

export default PersonaRoleForm;
