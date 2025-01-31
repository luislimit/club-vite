import GeneralEntity from "./GeneralEntity.jsx";
import PersonaForm from "./Form/PersonaForm.jsx";
import PersonaList from "./List/PersonaList.jsx";

function Persona() {
  return (
    <GeneralEntity
      ComponenteForm={PersonaForm}
      ComponenteLista={PersonaList}
      tituloEntidad={"Personas"}
      childEntities={["personaRole"]}
    />
  );
}

export default Persona;
