import { useState, useEffect, useCallback } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../../../context/UsuarioContext";

function CmbEntity({ nombreEntidad, rutaEntidad = "", value, onChange }) {
  const usuarioCtx = useContext(UsuarioContext);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [lista, setLista] = useState([]);

  // El fichero .env existe al mismo nivel que package.json
  const urlServicio = import.meta.env.VITE_API_URL + rutaEntidad;

  const consultar = useCallback(async () => {
    const respuesta = await fetch(urlServicio, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usuarioCtx.usuario?.jwtToken}`,
      },
    });

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }
    const data = await respuesta.json();
    setLista(data);
  });

  useEffect(() => {
    setSelectedValue(value);
    consultar();
  }, [nombreEntidad, value]);

  return (
    <select
      name={nombreEntidad}
      value={selectedValue}
      onChange={onChange}
      style={{
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      {/* Opción predeterminada */}
      <option value="" disabled>
        Seleccione {nombreEntidad}
      </option>

      {/* Renderizar elementos */}
      {lista.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nombre}
        </option>
      ))}
    </select>
  );
}

export default CmbEntity;
