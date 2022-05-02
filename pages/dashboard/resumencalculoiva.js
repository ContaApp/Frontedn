import { Col, Row, Button} from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperIVA from '../../components/utilities/Steppers/StepperIVA';
import TableResumenIVA from '../../components/utilities/Tables/TableResumenIVA';
import ButtonPage from '../../components/utilities/ButtonPage';
//import InputMoney from '../components/utilities/Input/Input-money-pages';
//import LottieISRCobranza from '../components/Lotties/Lottie-isr-cobranza';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function ResumenCalculoIVA() {
    const router = useRouter();
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperIVA num='5' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">Resumen de Cálculo de
                        <span className="span-title-card">
                            IVA
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="div-container-table-resumenisr-card">
                                        <TableResumenIVA/>
                                </div>
                            </Col>
                            <Col sm={12}>
                                    <div className="div-container-buttons-pages-card">
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/ivaacreditable')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/resumenmes')}>
                                            <span className="text-btn-pages-general" >Resumen Mensual</span>
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