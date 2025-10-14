import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalLogin from "../context/ModalLogin";
import ModalRegister from "../context/ModalRegister";

function Navbar({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => setUser(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
  <div className="container d-flex align-items-center justify-content-between" style={{ maxWidth: "1200px" }}>
    {/* Logo */}
    <Link to="/" className="navbar-brand fw-bold fs-4 text-primary">TutOnline</Link>

    {/* Navegación condicional */}
    {!user ? (
      <div className="d-flex align-items-center gap-4">
        {/* Centramos “Cómo funciona” un poco */}
        <Link to="/src/context/ComoFunciona.jsx" className="nav-link fw-semibold" style={{ marginRight: "1rem" }}>Cómo funciona?</Link>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" onClick={() => setShowLogin(true)}>Iniciar sesión</Button>
          <Button variant="primary" onClick={() => setShowRegister(true)}>Registrarse</Button>
        </div>
      </div>
    ) : (
      <div className="d-flex align-items-center gap-4">
        <Link to="/src/Pages/DashBoardStudent.jsx" className="nav-link fw-semibold">Dashboard</Link>
        <Link to="/src/Pages/BusquedaTutores.jsx" className="nav-link fw-semibold">Buscar Tutores</Link>
        <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
      </div>
    )}
  </div>
</nav>


      {/* Modales */}
      <ModalLogin show={showLogin} setShow={setShowLogin} setUser={setUser} />
      <ModalRegister show={showRegister} setShow={setShowRegister} />
    </>
  );
}

export default Navbar;
