import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';

import Layout from '../components/utilities/Layout';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';

import StepperIVA from '../components/utilities/Steppers/StepperIVA';
import InputMoney from '../components/utilities/Input/Input-money-pages';
import LottieIVADeducciones from '../components/Lotties/Lottie-iva-deducciones';

import next from '../public/assets/icons/Next.svg';
import prev from '../public/assets/icons/Previus.svg';

export default function IVADeducciones() {
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperIVA num='1' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">IVA
                        <span className="span-title-card">
                            Deducciones
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieIVADeducciones id="lottieIVADeducciones" className="lottie-pages" alt="IVA Deducciones" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El IVA acreditable o dedudible, es aquel IVA que efectivamente
pagaste de gastos relacionados con tu actividad en el mes. 
Asi mismos, estos deben contar con su factura para poder
ser deducibles.</p>
                                    
                                    <div className="div-container-input-card">
                                        <InputMoney nombre="IVA Acreditable" idInput="Input-ivaAcreditable" />
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