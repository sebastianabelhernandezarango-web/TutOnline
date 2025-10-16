import { useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalLogin from "../context/ModalLogin.tsx";
import ModalRegister from "../context/ModalRegister.tsx";

// Tipado de props
interface NavbarProps {
  user: boolean | null;
  setUser: Dispatch<SetStateAction<boolean | null>>;
}

function Navbar({ user, setUser }: NavbarProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => setUser(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container d-flex align-items-center justify-content-between" style={{ maxWidth: "1200px" }}>
          <Link to="/" className="navbar-brand fw-bold fs-4 text-primary">TutOnline</Link>

          {!user ? (
            <div className="d-flex align-items-center gap-4">
              <a href="#como-funciona" className="nav-link">Cómo funciona</a>
              <div className="d-flex gap-2">
                <Button variant="outline-primary" onClick={() => setShowLogin(true)}>Iniciar sesión</Button>
                <Button variant="primary" onClick={() => setShowRegister(true)}>Registrarse</Button>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-4">
              <Link to="/dashboard" className="nav-link fw-semibold">Dashboard</Link>
              <Link to="/busqueda" className="nav-link fw-semibold">Buscar Tutores</Link>
              <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
            </div>
          )}
        </div>
      </nav>

      <ModalLogin show={showLogin} setShow={setShowLogin} setUser={setUser} />
      <ModalRegister show={showRegister} setShow={setShowRegister} />
    </>
  );
}

export default Navbar;
