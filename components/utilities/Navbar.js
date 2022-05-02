import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
          <img
            alt=""
            src="/logo.svg"
            className=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav<bar-nav">
          <div className="d-flex justify-content-end link-font col-12 col-md-12">
            <Nav>
              <Nav.Link className="px-4">INICIO</Nav.Link>
              <Nav.Link className="px-4">BENEFICIOS</Nav.Link>
              <Nav.Link className="px-4 pb-4">INICIAR SESION</Nav.Link>
              <Link href="/">
                <button className="btn-contapp-navbar ">CREAR CUENTA</button>
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;