import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DBContext } from "../context/DBContext";
import Login from "../component/Login";

function ProtectedRoute() {
  const dBCtx = useContext(DBContext);

  return dBCtx.usuario ? <Outlet /> : <Login />;
}
export default ProtectedRoute;
