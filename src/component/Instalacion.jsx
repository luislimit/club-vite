import GeneralEntity from "./GeneralEntity.jsx";
import InstalacionForm from "./Form/InstalacionForm.jsx";
import InstalacionList from "./List/InstalacionList.jsx";

function Instalacion() {
  return (
    <GeneralEntity
      ComponenteForm={InstalacionForm}
      ComponenteLista={InstalacionList}
      tituloEntidad={"Instalaciones"}
      childEntities={["pista"]}
    />
  );
}

export default Instalacion;
