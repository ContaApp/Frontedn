import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperISR from '../../components/utilities/Steppers/StepperISR';
import InputMoney from '../../components/utilities/Input/Input-money-pages';
import LottieISRDeducible from '../../components/Lotties/Lottie-isr-deducible';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function ISRDeducible() {
    const router = useRouter();
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='1' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">ISR
                        <span className="span-title-card">
                            Deducible
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieISRDeducible id="lottieISRDecucilbe" className="lottie-pages" alt="ISR Deducible" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El ISR deducible se obtendrá de las deducciones del mes,
                                                                estas son todo gasto efectivamente pagado y relacionado con tu actividad, estos se deberan considerar sin IVA o alguna retención.</p>
                                    
                                    <div className="div-container-input-card">
                                        <InputMoney nombre="ISR Deducible" idInput="Input-isrDeducible" />
                                    </div>
                                    <div className="div-container-buttons-card">
                                        <Button className="btn-pages-np" onClick={()=> router.push('/dashboard/isrcobranza')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-np" onClick={()=> router.push('/dashboard/isrretenido')}>
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