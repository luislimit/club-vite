import GeneralEntity from "./GeneralEntity.jsx";
import EquipoForm from "./Form/EquipoForm.jsx";
import EquipoList from "./List/EquipoList.jsx";

function Equipo() {
  return (
    <GeneralEntity
      ComponenteForm={EquipoForm}
      ComponenteLista={EquipoList}
      tituloEntidad={"Equipos"}
      childEntities={["equipoPersona"]}
    />
  );
}

export default Equipo;
