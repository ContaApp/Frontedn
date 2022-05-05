import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperISR from '../../components/utilities/Steppers/StepperISR';
import InputMoney from '../../components/utilities/Input/Input-money-pages';
import LottieISRCobranza from '../../components/Lotties/Lottie-isr-cobranza';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function ISRCobranza() {
    const router = useRouter();
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='0' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">ISR
                        <span className="span-title-card">
                            Cobranza
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieISRCobranza id="lottieISRCobranza" className="lottie-pages" alt="Unete a tuContapp" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El ISR que se acumulara es aquel que proveendra de tus
                                        ingresos efectivamente cobrados en el mes, para este
                                        deberas tomar los subtotales de todos tus ingresos
                                        provenientes de tu actividad.</p>
                                    <div className="div-container-input-card">
                                        <InputMoney nombre="ISR Cobranza" idInput="Input-isrCobranza" />
                                    </div>
                                    <div className="div-container-buttons-card">
                                        <Button className="btn-pages-np" onClick={()=> router.push('/dashboard/dashboardHome')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-np" onClick={()=> router.push('/dashboard/isrdeducible')}>
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