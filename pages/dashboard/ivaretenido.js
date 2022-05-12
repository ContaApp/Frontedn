import { react, useState, useContext } from 'react';
import { ContextInputsCards } from '../../contexts/ContextInputsCards';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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

const schemaIvaRetenido = yup.object({
    vatWH: yup.number('Ingrese solo datos numéricos').min(0.0, 'Ingrese una cantidad valida').required('El campo es requerido')
})

export default function IVARetenido() {
    const { responseIvaForm, setResponseIvaForm } = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIvaRetenido)
    });

    const onSubmitInput = async (data) => {

        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIvaForm({ ...responseIvaForm, vatWH: data.vatWH });
        router.push('/dashboard/ivaacreditable');
        console.log('la data acumulada es:', responseIvaForm);


        //Aqui se maneja la promesa
        /* const response = await createAccount(data);
        const dataJson = await response.json();
 
        console.log('Data response:',response);
        console.log('Data dataJson:',dataJson);
 
        if (response.status === 200){
            router.push('/login')
            return
        }else {
           // Si ocurre un error
        setMessage ('No pudimos registrar tu cuenta, vuelve a intentarlo'); 
       
        }  */
        console.log(errors);
    }
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
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="IVA Retenido" idInput="Input-ivaRetenido" register={register} field='vatWH' />
                                            <p className="text-danger">{errors.vatWH?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/ivadeducciones') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/ivaacreditable')} */>
                                                <Image className="icon-btn-pages" src={next} alt="Siguiente" />
                                            </Button>

                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </LayoutPage>
        </Layout>
    )
}