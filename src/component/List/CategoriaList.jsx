import { useContext } from "react";
import { DBContext } from "../../context/DBContext";
import { useTranslation } from "react-i18next";

function CategoriaList() {
  const { t } = useTranslation();
  const dBCtx = useContext(DBContext);

  return (
    <div>
      {/* Tabla para mostrar la lista de categorias */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>{t("Nombre")}</th>
            <th>{t("EdadMin")}</th>
            <th>{t("EdadMax")}</th>
          </tr>
        </thead>
        <tbody>
          {dBCtx.lista.map((categoria) => (
            <tr key={categoria.id} onClick={() => dBCtx.setActual(categoria)}>
              <td>{categoria.nombre}</td>
              <td>{categoria.edadMinima}</td>
              <td>{categoria.edadMaxima}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriaList;
