import { DBContextProvider } from "../context/DBContext.jsx";
import GeneralEntity from "./GeneralEntity.jsx";
import PersonaForm from "./Form/PersonaForm.jsx";
import PersonaList from "./List/PersonaList.jsx";
import PersonaRoleForm from "./Form/PersonaRoleForm.jsx";
import PersonaRoleList from "./List/PersonaRoleList.jsx";

import { useTranslation } from "react-i18next";

function Persona() {
  const { t } = useTranslation();
  return (
    <DBContextProvider>
      <GeneralEntity
        ComponenteForm={PersonaForm}
        ComponenteLista={PersonaList}
        tituloEntidad={t("Personas")}
        nombreEntidad="persona"
      >
        <GeneralEntity
          ComponenteForm={PersonaRoleForm}
          ComponenteLista={PersonaRoleList}
          tituloEntidad={t("Roles")}
          nombreEntidad="personaRole"
        />
      </GeneralEntity>
    </DBContextProvider>
  );
}

export default Persona;
