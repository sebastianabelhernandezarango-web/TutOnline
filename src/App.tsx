import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/NavBar.tsx";
import LandingPage from "./Pages/LandingPage.tsx";
import DashboardStudent from "./Pages/DashBoardStudent.tsx";
import BusquedaTutores from "./Pages/BusquedaTutores.tsx";
import MapasTutores from "./Pages/MapasTutores";
import Reserva from "./Pages/Reserva.tsx";
import PerfilTutor from "./Pages/PerfilTutor.tsx";

function App() {
  // user puede ser null (no logueado) o boolean (logueado)
  const [user, setUser] = useState<{ name: string } | null>(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        {user && (
          <>
            <Route path="/dashboard" element={<DashboardStudent />} />
            <Route path="/busqueda" element={<BusquedaTutores />} />
            <Route path="/mapas-tutores" element={<MapasTutores />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/perfil-tutor" element={<PerfilTutor />} />  
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;