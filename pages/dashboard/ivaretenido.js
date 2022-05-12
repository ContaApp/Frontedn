import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperIVA from '../../components/utilities/Steppers/StepperIVA';
import InputMoney from '../../components/utilities/Input/Input-money-pages';
import LottieIVARetenido from '../../components/Lotties/Lottie-iva-retenido';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function IVADeducciones() {
    const router = useRouter();
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperIVA num='2' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">IVA
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
                                        <LottieIVARetenido id="lottieIVARetenido" className="lottie-pages" alt="IVA Retenido" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">
                                        Ingresa la suma del IVA retenido de las facturas cobradas
                                        en el mes, este lo podrás encontrar en el desglose de
                                        tus facturas efectivamente cobradas.
                                        </p>

                                    <div className="div-container-input-card">
                                        <InputMoney nombre="IVA Retenido" idInput="Input-ivaRetenido" />
                                    </div>
                                    <div className="div-container-buttons-card">
                                        <Button className="btn-pages-np" onClick={() => router.push('/dashboard/ivadeducciones')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-np" onClick={() => router.push('/dashboard/ivaacreditable')}>
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