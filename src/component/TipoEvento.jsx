import { DBContextProvider } from "../context/DBContext.jsx";
import GeneralEntity from "./GeneralEntity.jsx";
import TipoEventoForm from "./Form/TipoEventoForm.jsx";
import TipoEventoList from "./List/TipoEventoList.jsx";
import { useTranslation } from "react-i18next";

function TipoEvento() {
  const { t } = useTranslation();
  return (
    <DBContextProvider>
      <GeneralEntity
        ComponenteForm={TipoEventoForm}
        ComponenteLista={TipoEventoList}
        tituloEntidad={t("TipoEventos")}
        nombreEntidad="tipoEvento"
      />
    </DBContextProvider>
  );
}

export default TipoEvento;
