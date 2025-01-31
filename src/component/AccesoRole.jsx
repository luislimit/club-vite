import GeneralEntity from "./GeneralEntity.jsx";
import AccesoRoleForm from "./Form/AccesoRoleForm.jsx";
import AccesoRoleList from "./List/AccesoRoleList.jsx";

function AccesoRole() {
  return (
    <GeneralEntity
      ComponenteForm={AccesoRoleForm}
      ComponenteLista={AccesoRoleList}
      tituloEntidad={"AccesoRoles"}
    />
  );
}

export default AccesoRole;
