import { react, useState, useContext } from 'react';
import {ContextInputsCards} from '../../contexts/ContextInputsCards';
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
import LottieISRCobranza from '../../components/Lotties/Lottie-isr-cobranza';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

//se importa servicio 
import {createLogbooks} from '../../services/logbooks/index';

const schemaIsrCobranza = yup.object({
    incomes: yup.number('Ingrese solo datos numéricos').min(0.0, 'Ingrese una cantidad valida').typeError('Campo requerido').required('El campo es requerido')
})

export default function ISRCobranza() {
    const { responseIsrForm, setResponseIsrForm} = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIsrCobranza)});

    const onSubmitInput = async (data) => {

            
       

        console.log('Enviando data...')
        console.log('la data es:', data)
        setResponseIsrForm({incomes: data.incomes  })
        console.log('la data Acomulda es:', responseIsrForm)
        router.push('/dashboard/isrdeducible')

    }

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
                                    <p className="p-text-card">El ISR que se acumulara es aquel que provendrá de tus
                                        ingresos efectivamente cobrados en el mes, para este
                                        deberás tomar los subtotales de todos tus ingresos
                                        provenientes de tu actividad.</p>
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="ISR Cobranza" idInput="Input-isrCobranza" register={register} field='incomes' />

                                        </div>
                                        <div>
                                            <p className="text-danger">{errors.incomes?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/dashboardHome') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=>  */>
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
