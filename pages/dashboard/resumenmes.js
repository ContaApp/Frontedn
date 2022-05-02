import { Col, Row, Button} from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import Layout from '../../components/utilities/Layout';
import LayoutPage from '../../components/utilities/layout-page/LayoutPages';

import TableResumenISRMonth from '../../components/utilities/Tables/TableResumenISRMonth';
import TableResumenIVAMonth from '../../components/utilities/Tables/TableResumenIVAMonth';
import ButtonPage from '../../components/utilities/ButtonPage';
import Calendar from '../../components/utilities/Calendar';
//import InputMoney from '../components/utilities/Input/Input-money-pages';
import LottieISRCobranza from '../../components/Lotties/Lottie-isr-cobranza';
import imageResumen from '../../public/assets/images/Resume-bro.svg'

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

export default function ResumenDelMes() {
    const router = useRouter();
    return (
        <Layout>
        
            <LayoutPage>

                <Col sm={12} md={12}>
               
                     <h1 className="title-card">Resumen del
                        <span className="span-title-card">
                            mes
                        </span>
                    </h1> <div className="div-container-text-card-resumen">
                <p className="p-text-card">Por favor selecciona el mes del que deseas ver el resumen</p> </div>
                   
                </Col>
                <Row className="div-multim-cad-resumen" >
    
                    <div >
                        <Row>
                        <Col sm={12} md={6}>
                        <div className="div-image-card-resumen">
                            <Image className="img-resumen" src={imageResumen} alt="Imagen Resumen" />
                        </div>
                        </Col>
                        <Col sm={12} md={6}>
                        <div className="div-calendar-card-resumen">
                            <Calendar />
                        </div>
                        </Col>
                      </Row>
                     </div>
                   
                </Row>
                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad-tables" >
                        <Row>
                            
                            <Col sm={12} md={6}>
                                <div className="div-container-table-resumenisr-card">
                                        <TableResumenISRMonth/>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="div-container-table-resumenisr-card">
                                        <TableResumenIVAMonth/>
                                </div>
                            </Col>
                        
                            <Col sm={12}>
                                    <div className="div-container-buttons-pages-card">
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/resumencalculoiva')}>
                                            <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                        </Button>
                                        <Button className="btn-pages-general" onClick={()=> router.push('/dashboard/dashboardHome')}>
                                            <span className="text-btn-pages-general" >Nuevo Cálculo</span>
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