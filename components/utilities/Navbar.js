import { Badge, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav<bar-nav">
          <Nav className="me-auto">
            <Nav.Link>INICIO</Nav.Link>
            <Nav.Link >BENEFICIOS</Nav.Link>
            <Nav.Link >INICIAR SESION</Nav.Link>
            <Badge pill bg="success">UNETE A TUCONTAPP</Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;