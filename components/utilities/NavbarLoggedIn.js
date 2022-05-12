import { Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";

function NavigationBarLogedIn() {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem ("LoggedDataUser") //borra token
    router.push ("/") // se va home
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand onClick={()=> router.push("/dashboard/dashboardHome")}>
          <img
            alt="Logo Contaap"
            src="/logo.svg"
            className=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-end link-font col-12 col-md-12">
            <Nav>
              <Nav.Link className="px-4" onClick={()=> router.push("/dashboard/dashboardHome")}>INICIO</Nav.Link>
              <Nav.Link className="px-4" onClick={()=> router.push("/dashboard/analisisutilidad")}>HISTORIAL</Nav.Link>
              <div className="align-profile-menu">
              <img
                  alt="User Picture"
                  src="/ProfileIcon.svg"
                  className="ps-4 user-avatar"
                />
              <NavDropdown title="PERFIL" id="basic-nav-dropdown" className="margin-right">
                <NavDropdown.Item href="#action/3.1" className="selection-style">Perfil</NavDropdown.Item>
                <NavDropdown.Item className="selection-style">Ayuda</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> logOut ()} className="selection-style">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBarLogedIn;