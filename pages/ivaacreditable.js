import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';

import Layout from '../components/utilities/Layout';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';

import StepperIVA from '../components/utilities/Steppers/StepperIVA';
import InputMoney from '../components/utilities/Input/Input-money-pages';
import LottieIVAAcreditable from '../components/Lotties/Lottie-iva-a-acreditar';

import next from '../public/assets/icons/Next.svg';
import prev from '../public/assets/icons/Previus.svg';

export default function IVADeducciones() {
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperIVA num='4' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">IVA
                        <span className="span-title-card">
                            para Acreditar
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieIVAAcreditable id="lottieIVAAcreditar" className="lottie-pages" alt="IVA para Acreditar" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El IVA para/por Acreditar se da cuando existe un saldo a favor con anterioridad y
                                     se utiliza para disminuir el pago del mes a declarar. Este solo se podrá ingresar hasta el monto a pagar,
                                      es decir, no se podra utilizar de más</p>
                                    
                                    <div className="div-container-input-card">
                                        <InputMoney nombre="IVA para Acreditar" idInput="Input-ivaAcreditar" />
                                    </div>
                                    <div className="div-container-buttons-card">
                                        <Button className="btn-pages-np">
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-np">
                                            <Image className="icon-btn-pages" src={next} alt="Siguiente" />
                                        </Button>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </LayoutPage>
        </Layout>
    )
}