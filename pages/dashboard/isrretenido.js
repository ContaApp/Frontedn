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

import StepperISR from '../../components/utilities/Steppers/StepperISR';
import InputMoney from '../../components/utilities/Input/Input-money-pages';
import LottieISRRetenido from '../../components/Lotties/Lottie-isr-retenido';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

const schemaIsrRetenido = yup.object({
    whitholdedIncomeTax: yup.number('Ingrese solo datos numéricos').positive('Ingrese una cantidad valida').required('El campo es requerido')
})

export default function ISRRetenido() {
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const {limitCalculos} = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIsrRetenido)
    });
    const onSubmitInput = async (data) => {
        console.log('limitCalculos :', limitCalculos );
        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIsrForm({ ...responseIsrForm, whitholdedIncomeTax: data });
        router.push('/dashboard/resumencalculoisr');
        console.log('la data acumulada es:', responseIsrForm);

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

    
    const {objetLimit}= limitCalculos;
    const {incomes}= responseIsrForm;

    const multiplicacion = objetLimit.lowerLimit * incomes.incomes;
    console.log('La multiplicacion es:', multiplicacion);
    
        console.log(errors);
    }
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperISR num='2' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">ISR
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
                                        <LottieISRRetenido id="lottieISRRetenido" className="lottie-pages" alt="ISR Retenido" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El ISR retenido es aquel que se da cuando una persona fisica
                                        factura servicios profesionales a una persona moral, este monto
                                        lo podras encontrar desglozado en tus facturas efectivamente
                                        cobradas en el mes.</p>
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="ISR Retenido" idInput="Input-isrRetenido" register={register} field='whitholdedIncomeTax' />
                                            <p className="text-danger">{errors.whitholdedIncomeTax?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/isrdeducible') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/resumencalculoisr')} */>
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