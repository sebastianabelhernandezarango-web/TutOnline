import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import DashboardStudent from "./Pages/DashBoardStudent";
import BusquedaTutores from "./Pages/BusquedaTutores";
import MapasTutores from "./Pages/MapasTutores";
import Reserva from "./Pages/Reserva";
import PerfilTutor from "./Pages/PerfilTutor";

function App() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [showLogin, setShowLogin] = useState(false);        // Estado para modal login
  const [showRegister, setShowRegister] = useState(false);  // Estado para modal registro

  return (
    <Router>
      <Navbar
        user={user}
        setUser={setUser}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />

      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              user={user}
              setShowLogin={setShowLogin}
            />
          }
        />

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
