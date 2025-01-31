import GeneralEntity from "./GeneralEntity.jsx";
import PistaForm from "./Form/PistaForm.jsx";
import PistaList from "./List/PistaList.jsx";

function Pista() {
  return (
    <GeneralEntity
      ComponenteForm={PistaForm}
      ComponenteLista={PistaList}
      tituloEntidad={"Pistas"}
    />
  );
}

export default Pista;
