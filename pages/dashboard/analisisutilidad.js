import { Col, Row} from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import StepperISR from '../../components/utilities/Steppers/StepperISR';
import TableResumenISR from '../../components/utilities/Tables/TableResumenISR';
import ButtonPage from '../../components/utilities/ButtonPage';
import GraphicBar from '../../components/graphics/Graphic-Bar';
import GraphicCircle from '../../components/graphics/Graphic-Circle';
//import InputMoney from '../components/utilities/Input/Input-money-pages';
//import LottieISRCobranza from '../components/Lotties/Lottie-isr-cobranza';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function AnalisisUtilidad() {
    const router = useRouter();
    return (
        <Layout>
        
            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">Análisis de 
                        <span className="span-title-card">
                            Utilidad
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={8}>
                                <div className="div-scroll">
                               <div className="div-container-graphic-bar chart-container">
                                   <GraphicBar  className="graphic-bar"/>
                                   </div>
                                </div>        
                                
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="div-container-graphic-circle" >
                                    <GraphicCircle />
                                    </div>
                                 
                            </Col>
                        </Row>
                    </div>
                </Col>
            </LayoutPage>
        </Layout>
    )
}