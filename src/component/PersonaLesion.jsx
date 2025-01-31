import GeneralEntity from "./GeneralEntity.jsx";
import PersonaLesionForm from "./Form/PersonaLesionForm.jsx";
import PersonaLesionList from "./List/PersonaLesionList.jsx";

function PersonaLesion() {
  return (
    <GeneralEntity
      ComponenteForm={PersonaLesionForm}
      ComponenteLista={PersonaLesionList}
      tituloEntidad={"PersonaLesiones"}
    />
  );
}

export default PersonaLesion;
