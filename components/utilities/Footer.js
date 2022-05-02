import React from "react";

function Footer() {
    return (
        <footer className="container-fluid footer mt-4">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="d-flex justify-content-center py-5">
                        <img
                            alt=""
                            src="/logo.svg"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex justify-content-between">
                        <ul className="list-unstyled">
                            <li className='font-weight-bold mb-4'>COMPAÑIA</li>
                            <li className="font-regular mb-3">Inicio</li>
                            <li className="font-regular mb-3">Beneficios</li>
                            <li className="font-regular mb-3">Inicia sesión</li>
                            <li className="font-regular ">Crea tu cuenta</li>
                        </ul>
                        <ul className="list-unstyled ">
                            <li className='font-weight-bold mb-4'>CONTACTO</li>
                            <li className="font-regular mb-3">+52 (55) 1234 5678</li>
                            <li className="font-regular mb-3">info@tucontapp.mx</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center py-5">
                    <img className="mx-2"
                        alt=""
                        width="32"
                        height="32"
                        src="/YoutubeIcon.svg"
                    />
                    <img className="mx-2"
                        alt=""
                        width="32"
                        height="32"
                        src="/LinkedInIcon.svg"
                    />
                    <img className="mx-2"
                        alt=""
                        width="32"
                        height="32"
                        src="/TwitterIcon.svg"
                    />
                    <img className="mx-2"
                        alt=""
                        width="32"
                        height="32"
                        src="/FacebookIcon.svg"
                    />
                    <img className="mx-2"
                        alt=""
                        width="32"
                        height="32"
                        src="/InstagramIcon.svg"
                    />
                </div>
                <div className="font-regular my-2 text-center">
                    <p>Política de privacidad</p>
                    <p>2022  ©  Contapp. Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;