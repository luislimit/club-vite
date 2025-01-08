import { useContext } from "react";
import { Outlet } from 'react-router-dom'
import { UsuarioContext } from "../context/UsuarioContext";
import Login from '../component/Login'

function ProtectedRoute() {

  const usuarioCtx = useContext(UsuarioContext);

  return usuarioCtx.usuario ? <Outlet /> : <Login />;
  
}
export default ProtectedRoute
