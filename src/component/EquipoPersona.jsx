import GeneralEntity from "./GeneralEntity.jsx";
import EquipoPersonaForm from "./Form/EquipoPersonaForm.jsx";
import EquipoPersonaList from "./List/EquipoPersonaList.jsx";

function EquipoPersona() {
  return (
    <GeneralEntity
      ComponenteForm={EquipoPersonaForm}
      ComponenteLista={EquipoPersonaList}
      tituloEntidad={"EquipoPersonas"}
    />
  );
}

export default EquipoPersona;
