import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/NavBar.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import DashboardStudent from "./pages/DashboardStudent";
import BusquedaTutores from "./pages/BusquedaTutores";

function App() {
  const [user, setUser] = useState(true); // null = no logueado, true = Logueado

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        {user && (
          <>
            <Route path="/dashboard" element={<DashboardStudent />} />
            <Route path="/busqueda" element={<BusquedaTutores />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
