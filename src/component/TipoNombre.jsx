import GeneralEntity from "./GeneralEntity.jsx";
import TipoNombreForm from "./Form/TipoNombreForm.jsx";
import TipoNombreList from "./List/TipoNombreList.jsx";

function TipoNombre({ tituloEntidad, childEntities = [] }) {
  return (
    <GeneralEntity
      ComponenteForm={TipoNombreForm}
      ComponenteLista={TipoNombreList}
      tituloEntidad={tituloEntidad}
      childEntities={childEntities}
    />
  );
}

export default TipoNombre;
