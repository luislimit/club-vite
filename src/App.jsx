import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioContextProvider } from "./context/UsuarioContext";
import Menu from "./component/Menu";
import Role from "./component/Role";
import Home from "./component/Home";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Persona from "./component/Persona";
import TipoEvento from "./component/TipoEvento";
import Categoria from "./component/Categoria";
import ProtectedRoute from "./component/ProtectedRoute";
import Instalacion from "./component/Instalacion";

function App() {
  return (
    <UsuarioContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/role" element={<Role />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/persona" element={<Persona />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/tipoEvento" element={<TipoEvento />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UsuarioContextProvider>
  );
}

export default App;
