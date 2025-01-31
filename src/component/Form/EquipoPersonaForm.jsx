import { useContext, useState, useEffect } from "react";
import { DBContext } from "../../context/DBContext";
import CmbEntity from "./Control/CmbEntity";

function EquipoPersonaForm({ objParent }) {
  const equipo = objParent;
  const dBCtx = useContext(DBContext);
  const [roleId, setRoleId] = useState(
    dBCtx.actual?.personaRole?.role?.id || ""
  );

  useEffect(() => {
    if (
      dBCtx.actual?.personaRole?.role?.id &&
      dBCtx.actual?.personaRole?.role?.id != roleId
    ) {
      setRoleId(dBCtx.actual?.personaRole?.role?.id);
    } else if (!dBCtx.actual && roleId) {
      setRoleId("");
    }
  }, [dBCtx.actual?.personaRole]);

  const filtrarPersonasByRole = (lista) => {
    return lista.filter(
      (pr) =>
        roleId == pr?.role?.id &&
        (dBCtx.actual?.personaRole?.id == pr?.id ||
          !dBCtx.lista?.some((db) => db.personaRole?.id == pr?.id))
    );
  };

  const fnOnChangeRole = (e) => {
    const idRole = e.target.value;
    setRoleId(idRole);
    if (idRole != dBCtx.actual?.personaRole?.role?.id ?? -1) {
      dBCtx.setActual({
        id: dBCtx.actual?.id || "",
        equipo,
        personaRole: { id: "", persona: { id: "" } },
      });
    }
  };

  return (
    <>
      <CmbEntity
        urlEntidad={"role/miembroEquipo"}
        nombreEntidad={"role"}
        value={roleId}
        onChange={fnOnChangeRole}
      />
      {equipo.id && (
        <CmbEntity
          urlEntidad={`equipo/selMiembros/${equipo.id}`}
          nombreEntidad={"personaRole"}
          value={dBCtx.actual?.personaRole?.id}
          onChange={dBCtx.fnOnChange}
          fnFilter={filtrarPersonasByRole}
        />
      )}
    </>
  );
}

export default EquipoPersonaForm;
