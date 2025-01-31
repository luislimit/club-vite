import GeneralEntity from "./GeneralEntity.jsx";
import RoleForm from "./Form/RoleForm.jsx";
import RoleList from "./List/RoleList.jsx";

function Role() {
  return (
    <GeneralEntity
      ComponenteForm={RoleForm}
      ComponenteLista={RoleList}
      tituloEntidad={"Roles"}
      childEntities={["accesoRole", "personaRole"]}
    />
  );
}

export default Role;
