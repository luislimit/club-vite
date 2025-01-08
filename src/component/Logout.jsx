import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import Home from './Home'

function Logout() {
  const usuarioCtx = useContext(UsuarioContext);

  usuarioCtx.cerrarSesion();

  return (
    <Home/>
  );
}

export default Logout;
