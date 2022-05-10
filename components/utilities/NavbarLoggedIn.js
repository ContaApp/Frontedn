import { Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavigationBarLogedIn() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
          <img
            alt="Logo Contaap"
            src="/logo.svg"
            className=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav<bar-nav">
          <div className="d-flex justify-content-end link-font col-12 col-md-12">
            <Nav>
              <Nav.Link className="px-4">INICIO</Nav.Link>
              <Nav.Link className="px-4">AYUDA</Nav.Link>
              <img
                  alt=""
                  src="/ProfileIcon.svg"
                  className="ps-4 user-avatar"
                />
              <NavDropdown title="PERFIL" id="basic-nav-dropdown" className="margin-right">
                <NavDropdown.Item href="#action/3.1" className="selection-style">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="selection-style">Historial</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="selection-style">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBarLogedIn;