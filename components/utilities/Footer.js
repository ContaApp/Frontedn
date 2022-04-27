import React from "react";

function Footer() {
    return (
        <div>
            <footer className="py-4">
                <div className="container">
                    <nav className="row">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="100"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className='font-weight-bold mb-2'>Compañia</li>
                            <li>Inicio</li>
                            <li>Beneficios</li>
                            <li>Inicia sesión</li>
                            <li>Crea tu cuenta</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className='font-weight-bold mb-2'>CONTACTO</li>
                            <li>+52 (55) 1234 5678</li>
                            <li>info@tucontapp.mx</li>
                        </ul>
                        <img
                            alt=""
                            width="24"
                            height="24"
                            src="/YoutubeIcon.svg"
                        />
                        <img
                            alt=""
                            width="24"
                            height="24"
                            src="/LinkedInIcon.svg"
                        />
                        <img
                            alt=""
                            width="24"
                            height="24"
                            src="/TwitterIcon.svg"
                        />
                        <img
                            alt=""
                            width="24"
                            height="24"
                            src="/FacebookIcon.svg"
                        />
                        <img
                            alt=""
                            width="24"
                            height="24"
                            src="/InstagramIcon.svg"
                        />
                        <p>Política de privacidad</p>
                        <p>2022  ©  Contapp. Todos los derechos reservados</p>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;