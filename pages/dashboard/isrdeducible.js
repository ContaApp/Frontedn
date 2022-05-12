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
import LottieISRDeducible from '../../components/Lotties/Lottie-isr-deducible';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

//se importa servicio 
import { searchRange } from '../../services/tablesISR/index';
const schemaIsrDeducible = yup.object({
    expenses: yup.number('Ingrese solo datos numéricos').positive('Ingrese una cantidad valida').required('El campo es requerido')
})

export default function ISRDeducible() {
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const {responseInputsDate, setResponseInputsDate} = useContext(ContextInputsCards);
    const {limitCalculos, setLimitCalculos} = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIsrDeducible)
    });

    const onSubmitInput = async (data) => {

        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIsrForm({ ...responseIsrForm, expenses: data })
        
        console.log('la data acumulada es:', responseIsrForm);
        
        //Aqui se maneja la promesa
        const objetSearchRange={
            ...responseInputsDate, ...responseIsrForm.incomes
        }

    
        console.log('El objeto que buscará',objetSearchRange);
            const {month, year, incomes}= objetSearchRange
        const response = await searchRange(month,  year, incomes);
        const dataJson = await response.json();
 
        console.log('Data response:',response);
        console.log('Data dataJson:',dataJson);
        
        const objetLimitIsr= dataJson.data.dataFound[0];
        
        setLimitCalculos({...limitCalculos, objetLimitIsr:objetLimitIsr})

        if (response.status === 200){
            console.log('El objeto Limit es:',objetLimitIsr )
            console.log('El objeto guardandolo en el contexto',limitCalculos )
            router.push('/dashboard/isrretenido')
            return
        }
        console.log(errors);
    }
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
                                    <p className="p-text-card">El ISR deducible se dará de las deducciones del mes,
                                        estas son todo gasto efectivamente pagado relacionado con tu actividad, estos se deberan considerar sin IVA o alguna retención.</p>
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="ISR Deducible" idInput="Input-isrDeducible" register={register} field='expenses' />
                                            <p className="text-danger">{errors.expenses?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/isrcobranza') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/isrretenido')} */>
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