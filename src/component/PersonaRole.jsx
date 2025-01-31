import { useLocation } from "react-router-dom";
import GeneralEntity from "./GeneralEntity.jsx";
import PersonaRoleForm from "./Form/PersonaRoleForm.jsx";
import RoleList from "./List/RoleList.jsx";
import PersonaList from "./List/PersonaList.jsx";

function PersonaRole() {
  const location = useLocation();
  const fromRole = location.pathname.includes("/role/");
  return (
    <GeneralEntity
      ComponenteForm={PersonaRoleForm}
      ComponenteLista={fromRole ? PersonaList : RoleList}
      tituloEntidad={"PersonaRoles"}
    />
  );
}

export default PersonaRole;
