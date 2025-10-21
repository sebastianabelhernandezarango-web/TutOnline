import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUserGraduate, FaChalkboardTeacher, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";

interface ModalRegisterProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  switchToLogin?: () => void; // Para abrir el modal de login desde aquí
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ show, setShow, switchToLogin }) => {
  const [userType, setUserType] = useState<"estudiante" | "tutor">("estudiante");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Debes aceptar los términos y condiciones para continuar.");
      return;
    }
    alert(`Registro exitoso como ${userType === "tutor" ? "Tutor" : "Estudiante"}`);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered size="lg">
      <div className="p-4" style={{ backgroundColor: "#f8f9ff", borderRadius: "10px" }}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-center w-100">
            <span style={{ color: "#6f42c1" }}>TutoresOnLine</span>
            <p className="text-muted fs-6 mt-1">Accede a tu cuenta o crea una nueva</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            {/* === REGISTRO === */}
            <div className="col-md-12">
              <div
                className="p-4 rounded-4 shadow-sm bg-white"
                style={{ borderTop: "6px solid #d63384" }}
              >
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <FaChalkboardTeacher className="text-danger" /> Registrarse
                </h5>

                {/* Tipo de usuario */}
                <div className="d-flex gap-2 mb-3">
                  <Button
                    variant={userType === "estudiante" ? "primary" : "outline-primary"}
                    className="flex-fill d-flex align-items-center justify-content-center gap-2"
                    onClick={() => setUserType("estudiante")}
                  >
                    <FaUserGraduate /> Estudiante
                  </Button>
                  <Button
                    variant={userType === "tutor" ? "success" : "outline-success"}
                    className="flex-fill d-flex align-items-center justify-content-center gap-2"
                    onClick={() => setUserType("tutor")}
                  >
                    <FaChalkboardTeacher /> Tutor
                  </Button>
                </div>

                <Form onSubmit={handleRegister}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" required placeholder="Tu nombre" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" required placeholder="Tu apellido" />
                    </div>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required placeholder="tu@email.com" />
                  </Form.Group>

                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Contraseña</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="Mínimo 8 caracteres"
                      />
                      <Button
                        variant="light"
                        type="button"
                        className="ms-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </div>
                  </Form.Group>

                  {userType === "tutor" && (
                    <Form.Group className="mb-3">
                      <Form.Label>Materias que enseñas</Form.Label>
                      <Form.Control type="text" placeholder="Ej: Matemáticas, Física, Inglés..." />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          Acepto los{" "}
                          <a href="#" className="text-primary text-decoration-none">
                            términos y condiciones
                          </a>
                        </>
                      }
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className={`w-100 py-2 fw-semibold text-white ${
                      userType === "tutor" ? "bg-success" : "bg-primary"
                    }`}
                  >
                    Registrarse como {userType === "tutor" ? "Tutor" : "Estudiante"}
                  </Button>
                </Form>

                <p className="text-center mt-3">
                  ¿Ya tienes cuenta?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(false);
                      switchToLogin?.();
                    }}
                    className="text-danger text-decoration-none fw-semibold"
                  >
                    Inicia sesión
                  </a>
                </p>

                {/* --- O continuar con --- */}
                <div className="text-center mt-4">
                  <p className="text-muted">O continúa con</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <Button variant="light" className="border d-flex align-items-center gap-2 px-4">
                      <FaGoogle className="text-danger" /> Google
                    </Button>
                    <Button variant="light" className="border d-flex align-items-center gap-2 px-4">
                      <FaFacebook className="text-primary" /> Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalRegister;
