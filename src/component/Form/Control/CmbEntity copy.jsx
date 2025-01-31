import { useEffect, useState } from "react";
import { useContext } from "react";
import { DBContext } from "../../../context/DBContext";
import { useTranslation } from "react-i18next";
import { fnEntidadNombre } from "../../../utils/Funciones.js";

function CmbEntity({
  nombreEntidad,
  value = "",
  onChange,
  listaIdDisabled = [],
}) {
  const { t } = useTranslation();
  const [listaEntity, setListaEntity] = useState([]);
  const [listaFiltered, setListaFiltered] = useState([]);
  const dBCxt = useContext(DBContext);

  useEffect(() => {
    dBCxt.consultaEntidad(nombreEntidad, setListaEntity);
  }, [nombreEntidad]);

  useEffect(() => {
    if (listaIdDisabled.length > 0) {
      setListaFiltered(
        listaEntity.filter(
          (e) => e.id == value || !listaIdDisabled.find((d) => d === e?.id)
        )
      );
    } else {
      setListaFiltered(listaEntity);
    }
  }, [listaEntity, listaIdDisabled, value]);

  return (
    <select
      name={nombreEntidad}
      value={value ? value : ""}
      onChange={onChange}
      style={{
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      {/* Opción predeterminada */}
      <option value="" disabled key={0}>
        {t("Seleccione")} {t(nombreEntidad)}
      </option>
      {/* Renderizar elementos */}

      {listaFiltered.map((item) => (
        <option key={item.id} value={item.id}>
          {fnEntidadNombre(nombreEntidad, item)}
        </option>
      ))}
    </select>
  );
}

export default CmbEntity;
