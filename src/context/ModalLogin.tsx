import { Modal, Button, Form } from "react-bootstrap";

function ModalLogin({ show, setShow, setUser }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Usuario" }); // Simula login exitoso
    setShow(false);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" required placeholder="ejemplo@correo.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required placeholder="********" />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Entrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
