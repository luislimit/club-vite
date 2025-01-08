import { DBContextProvider } from "../context/DBContext.jsx";
import GeneralEntity from "./GeneralEntity.jsx";
import CategoriaForm from "./Form/CategoriaForm.jsx";
import CategoriaList from "./List/CategoriaList.jsx";
import { useTranslation } from "react-i18next";

function Categoria() {
  const { t } = useTranslation();
  return (
    <DBContextProvider>
      <GeneralEntity
        ComponenteForm={CategoriaForm}
        ComponenteLista={CategoriaList}
        tituloEntidad={t("Categorias")}
        nombreEntidad="categoria"
      />
    </DBContextProvider>
  );
}

export default Categoria;
