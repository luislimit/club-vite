import { DBContextProvider } from "../context/DBContext.jsx";
import GeneralEntity from "./GeneralEntity.jsx";
import InstalacionForm from "./Form/InstalacionForm.jsx";
import InstalacionList from "./List/InstalacionList.jsx";
import PistaForm from "./Form/PistaForm.jsx";
import PistaList from "./List/PistaList.jsx";
import { useTranslation } from "react-i18next";


function Instalacion() {
  const { t } = useTranslation();
  return (
    <DBContextProvider>
      <GeneralEntity
        ComponenteForm={InstalacionForm}
        ComponenteLista={InstalacionList}
        tituloEntidad={t("Instalaciones")}
        nombreEntidad="instalacion"
      >
        <GeneralEntity
          ComponenteForm={PistaForm}
          ComponenteLista={PistaList}
          tituloEntidad={t("Pistas")}
          nombreEntidad="pista"
        />
      </GeneralEntity>
    </DBContextProvider>
  );
}

export default Instalacion;
