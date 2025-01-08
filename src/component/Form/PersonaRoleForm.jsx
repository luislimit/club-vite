import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";
import CmbEntity from "./Control/CmbEntity";

function PersonaRoleForm() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  const valorVacio = {
    id: "",
    role: { id: "", nombre: "" },
    persona: { id: "", nombre: "" },
  };

  const valorInicial = dBCtx.actual || valorVacio;

  return (
    <>
      <CmbEntity
        nombreEntidad="role"
        rutaEntidad={dBCtx.entidad + "/pendientes"}
        value={valorInicial.role.id}
        onChange={dBCtx.fnOnChange}
      />
      {dBCtx.error && <p>{dBCtx.error}</p>}
    </>
  );
}

export default PersonaRoleForm;
