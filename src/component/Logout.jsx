import { useContext } from "react";
import { DBContext } from "../context/DBContext";
import Home from "./Home";

function Logout() {
  const dBCtx = useContext(DBContext);

  dBCtx.cerrarSesion();

  return <Home />;
}

export default Logout;
