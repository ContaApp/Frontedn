import { Col, Row} from 'react-bootstrap';
import Image from 'next/image';

import Layout from '../components/utilities/Layout';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';

import StepperISR from '../components/utilities/Steppers/StepperISR';
import TableResumenISR from '../components/utilities/Tables/TableResumenISR';
import ButtonPage from '../components/utilities/ButtonPage';
//import InputMoney from '../components/utilities/Input/Input-money-pages';
//import LottieISRCobranza from '../components/Lotties/Lottie-isr-cobranza';

import next from '../public/assets/icons/Next.svg';
import prev from '../public/assets/icons/Previus.svg';

export default function ResumenCalculoISR() {
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='5' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">Resumen de Cálculo de
                        <span className="span-title-card">
                            ISR
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="div-container-table-resumenisr-card">
                                        <TableResumenISR/>
                                </div>
                            </Col>
                            <Col sm={12}>
                                    <div className="div-container-buttons-pages-card">
                                        <ButtonPage className="btn-pages-general-np">
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </ButtonPage>
                                        <ButtonPage className="btn-pages-general">
                                            <span className="text-btn-pages-general" >Resumen Mensual</span>
                                        </ButtonPage>

                                    </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </LayoutPage>
        </Layout>
    )
}