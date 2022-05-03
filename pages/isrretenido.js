import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';

import Layout from '../components/utilities/Layout';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';

import StepperISR from '../components/utilities/Steppers/StepperISR';
import InputMoney from '../components/utilities/Input/Input-money-pages';
import LottieISRRetenido from '../components/Lotties/Lottie-isr-retenido';

import next from '../public/assets/icons/Next.svg';
import prev from '../public/assets/icons/Previus.svg';

export default function ISRRetenido() {
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='2' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">ISR
                        <span className="span-title-card">
                            Retenido
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieISRRetenido id="lottieISRRetenido" className="lottie-pages" alt="ISR Retenido" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El ISR retenido es aquel que se da cuando una persona fisica
factura servicios profesionales a una persona moral, este monto
lo podras encontrar desglozado en tus facturas efectivamente
cobradas en el mes.</p>
                                    
                                    <div className="div-container-input-card">
                                        <InputMoney nombre="ISR Retenido" idInput="Input-isrRetenido" />
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