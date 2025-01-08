import { DBContextProvider } from "../context/DBContext.jsx";
import GeneralEntity from "./GeneralEntity.jsx";
import RoleForm from "./Form/RoleForm.jsx";
import RoleList from "./List/RoleList.jsx";
import { useTranslation } from "react-i18next";

function Role() {
  const { t } = useTranslation();
  return (
    <DBContextProvider  >
      <GeneralEntity
        ComponenteForm={RoleForm}
        ComponenteLista={RoleList}
        tituloEntidad={t("Roles")}
        nombreEntidad="role"
      />
    </DBContextProvider>
  );
}

export default Role;
