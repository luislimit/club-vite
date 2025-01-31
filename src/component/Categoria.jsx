import GeneralEntity from "./GeneralEntity.jsx";
import CategoriaForm from "./Form/CategoriaForm.jsx";
import CategoriaList from "./List/CategoriaList.jsx";

function Categoria() {
  return (
    <GeneralEntity
      ComponenteForm={CategoriaForm}
      ComponenteLista={CategoriaList}
      tituloEntidad={"Categorias"}
    />
  );
}

export default Categoria;
