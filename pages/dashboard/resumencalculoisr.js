import { Col, Row, Button} from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperISR from '../../components/utilities/Steppers/StepperISR';
import TableResumenISR from '../../components/utilities/Tables/TableResumenISR';
import ButtonPage from '../../components/utilities/ButtonPage';
//import InputMoney from '../components/utilities/Input/Input-money-pages';
//import LottieISRCobranza from '../components/Lotties/Lottie-isr-cobranza';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function ResumenCalculoISR() {
    const router = useRouter();
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='5' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">Resumen de cálculo de
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
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/isrretenido')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/ivacobrado')}>
                                            <span className="text-btn-pages-general" >IR A CÁLCULO DE IVA</span>
                                        </Button>

                                    </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </LayoutPage>
        </Layout>
    )
}