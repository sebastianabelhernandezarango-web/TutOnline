import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/NavBar.tsx";
import LandingPage from "./Pages/LandingPage.tsx";
import DashboardStudent from "./Pages/DashBoardStudent.tsx";
import BusquedaTutores from "./Pages/BusquedaTutores.tsx";

function App() {
  // user puede ser null (no logueado) o boolean (logueado)
  const [user, setUser] = useState<boolean | null>(true);

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
