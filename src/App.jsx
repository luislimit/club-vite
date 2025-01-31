import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DBContextProvider } from "./context/DBContext";
import Menu from "./component/Menu";
import Role from "./component/Role";
import AccesoRole from "./component/AccesoRole";
import Home from "./component/Home";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Persona from "./component/Persona";
import TipoNombre from "./component/TipoNombre";
import Categoria from "./component/Categoria";
import ProtectedRoute from "./component/ProtectedRoute";
import Instalacion from "./component/Instalacion";
import Pista from "./component/Pista";
import Equipo from "./component/Equipo";
import EquipoPersona from "./component/EquipoPersona";
import PersonaRole from "./component/PersonaRole";
import PersonaLesion from "./component/PersonaLesion";

function App() {
  return (
    <DBContextProvider>
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
            <Route path="/equipo" element={<Equipo />} />
            <Route
              path="/tipoEvento"
              element={<TipoNombre tituloEntidad="TipoEventos" />}
            />
            <Route
              path="/tipoLesion"
              element={<TipoNombre tituloEntidad="TipoLesion" />}
            />
            <Route
              path="/nivelEntrenador"
              element={<TipoNombre tituloEntidad="nivelEntrenador" />}
            />
            <Route
              path="/idioma"
              element={<TipoNombre tituloEntidad="idioma" />}
            />
            <Route
              path="/acceso"
              element={
                <TipoNombre
                  tituloEntidad="acceso"
                  childEntities={["accesoRole"]}
                />
              }
            />
            <Route path="/pista/instalacion/:id" element={<Pista />} />
            <Route path="/personaRole/persona/:id" element={<PersonaRole />} />
            <Route path="/personaRole/role/:id" element={<PersonaRole />} />
            <Route path="/personaLesion" element={<PersonaLesion />} />
            <Route path="/accesoRole/role/:id" element={<AccesoRole />} />
            <Route path="/accesoRole/acceso/:id" element={<AccesoRole />} />
            <Route
              path="/equipoPersona/equipo/:id"
              element={<EquipoPersona />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </DBContextProvider>
  );
}

export default App;
