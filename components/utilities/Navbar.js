import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useRouter } from 'next/router';

function NavigationBar() {
  const router = useRouter();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand onClick={()=> router.push('/')} >
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
              <Nav.Link className="px-4" onClick={()=> router.push('/')}>INICIO</Nav.Link>
              <Nav.Link className="px-4" href="/#section-one">BENEFICIOS</Nav.Link>
              <Nav.Link className="px-4 pb-4" onClick={()=> router.push('/login')}>INICIAR SESION</Nav.Link>
              <Link href="/">
                <button className="btn-contapp-navbar " onClick={()=> router.push('/register')}>CREAR CUENTA</button>
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;