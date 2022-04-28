import { Col,Row, Button } from 'react-bootstrap';
import Image from 'next/image';

import Layout from '../components/utilities/Layout';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';
import Calendar from '../components/utilities/Calendar';

import imagenDashboardHome from '../public/assets/images/dashboard/001-img-dashboard.svg'
export default function DashboardHome() {
    return (
        <Layout>
            <LayoutPage>
                <Col sm={12} md={12}>
                    <h1 className="h3-card">Seleccionar el mes a calcular</h1>
                    <p className="p-text-card">Por el momento solo se puede calcular ejercicios fiscales de año 2022.</p>
                    <p className="p-text-card">Se iniciará con los impuestos relacionados al ISR y posteriormente con el IVA.</p>
                </Col>



                <Col sm={12} md={10} >
                    <div className="div-multim-cad" >
                        <Row>
                        <Col sm={12} md={6}>
                        <div className="div-image-card">
                            <Image className="img-dashboardHome" src={imagenDashboardHome} alt="Imagen Dashboard Home" />
                        </div>
                        </Col>
                        <Col sm={12} md={6}>
                        <div className="div-calendar-card">
                            <Calendar />
                            <Button className="btn-landing">
                      <span className="text-btn-landing">CONFIRMAR</span>
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