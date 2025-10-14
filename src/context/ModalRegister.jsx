import { Modal, Button, Form } from "react-bootstrap";

function ModalRegister({ show, setShow }) {
  const handleRegister = (e) => {
    e.preventDefault();
    setShow(false);
    alert("Registro exitoso (aquí iría la lógica real)");
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crear cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" required placeholder="Tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" required placeholder="ejemplo@correo.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required placeholder="********" />
          </Form.Group>
          <Button type="submit" variant="success" className="w-100">
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalRegister;
