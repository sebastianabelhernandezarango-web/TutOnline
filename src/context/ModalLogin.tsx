import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

interface ModalLoginProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<{ name: string } | null>>;
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  show,
  setShow,
  setShowRegister,
  setUser,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ name: "Usuario Ficticio" });
    setShow(false);
  };

  const handleClose = () => setShow(false);

  const handleGoToRegister = () => {
    setShow(false);
    setShowRegister(true);
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Body
        className="p-5 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
          border: "1px solid #dee2e6",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary mb-1">¡Bienvenido de nuevo!</h3>
          <p className="text-muted">Inicia sesión para continuar</p>
        </div>

        <Form onSubmit={handleLogin}>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              required
              className="rounded-pill p-2"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                required
                className="rounded-start-pill p-2"
              />
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="rounded-end-pill"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
          </Form.Group>

          {/* Remember + Forgot password */}
          <Form.Group className="d-flex align-items-center justify-content-between mb-3">
            <Form.Check
              type="checkbox"
              label="Recuérdame"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <a href="#" className="text-decoration-none small">
              ¿Olvidaste tu contraseña?
            </a>
          </Form.Group>

          {/* Botón principal */}
          <div className="d-grid gap-2 mb-4">
            <Button
              variant="primary"
              type="submit"
              className="rounded-pill py-2 fw-semibold"
            >
              Iniciar sesión
            </Button>
          </div>

          {/* Social login */}
          <div className="text-center mb-3">
            <p className="text-muted">O continuar con</p>
            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="outline-danger"
                className="rounded-pill d-flex align-items-center gap-2"
              >
                <FaGoogle /> Google
              </Button>
              <Button
                variant="outline-primary"
                className="rounded-pill d-flex align-items-center gap-2"
              >
                <FaFacebook /> Facebook
              </Button>
            </div>
          </div>

          {/* Registro */}
          <div className="text-center mt-4">
            <p>
              ¿No tienes cuenta?{" "}
              <a
                href="#"
                onClick={handleGoToRegister}
                className="fw-semibold text-decoration-none text-primary"
              >
                Regístrate
              </a>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
