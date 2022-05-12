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

//se importa servicio 
import { searchRange } from '../../services/tablesISR/index';

import { calculateIsrProfit, calculateIsracumulated, calculateIsrResult, calculateIsrItToPay } from '../../lib/calculosISR';


const schemaIsrRetenido = yup.object({
    whitholdedIncomeTax: yup.number('Ingrese solo datos numéricos').min(0.0, 'Ingrese una cantidad valida').required('El campo es requerido')
})

export default function ISRRetenido() {
    const { responseInputsDate, setResponseInputsDate } = useContext(ContextInputsCards);
    const { limitCalculos, setLimitCalculos } = useContext(ContextInputsCards);
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIsrRetenido)
    });

    const onSubmitInput = async (data) => {
        try {
            // la resta de cobranza - deducible
            const isrProfit = calculateIsrProfit(responseIsrForm.incomes, responseIsrForm.expenses)
            console.log('isrProfit: ', isrProfit)
            // Busca los limites
            const objetSearchRange = {
                ...responseInputsDate, profit: isrProfit 
            }
            console.log(objetSearchRange)

            console.log('El objeto que buscará', objetSearchRange);
            const { month, year, profit } = objetSearchRange;
            const response = await searchRange(month, year, profit);
            const dataJson = await response.json();

            console.log('Data response:', response);
            console.log('Data dataJson:', dataJson);
            if(response.status === 200) {
                const objetLimitIsr = dataJson.data.dataFound[0];

                console.log('objetLimitIsr: ', objetLimitIsr)
    
                // El acumulado comos e calcula  a partir de que datos
                const isrResult = calculateIsrResult(objetLimitIsr, isrProfit)
    
                console.log('calculateIsrResult: ', isrResult )
    
                const isrItToPay = calculateIsrItToPay(isrResult, Number(data.whitholdedIncomeTax))
    
                console.log('isrItToPay: ', isrItToPay )
                // checar nombres
                setResponseIsrForm({ ...responseIsrForm, whitholdedIncomeTax: data.whitholdedIncomeTax, profit: isrProfit, acumulated: isrProfit, result: isrResult, itToPay:isrItToPay, objetLimitIsr:objetLimitIsr});
    
                router.push('/dashboard/resumencalculoisr');
            }

            


            // setTimeout(function () {
            //     setTimeout(function () {
            //         console.log('El objeto LimitCalculos guardandolo en el contexto', limitCalculos)
            //         router.push('/dashboard/resumencalculoisr');
            //     }, 2000)

            //     console.log('Enviando data...');
            //     console.log('la data es:', data);
            //     const acumulated = calculateIsracumulated(objetoProfit)
            //     console.log('acumulated', acumulated)
            //     const objetoAcumulated = { acumulated: acumulated };
                
            //     setResponseIsrForm({ ...responseIsrForm, whitholdedIncomeTax: data.whitholdedIncomeTax, profit: objetoProfit.profit, acumulated: objetoAcumulated.acumulated});

            
            // }, 5000);

            // setTimeout(async function () {
            //     //Aqui se maneja la promesa
            //     const objetSearchRange = {
            //         ...responseInputsDate, ...objetoProfit
            //     }
            //     console.log('El objeto que buscará', objetSearchRange);
            //     const { month, year, profit } = objetSearchRange;
            //     const response = await searchRange(month, year, profit);
            //     const dataJson = await response.json();

            //     console.log('Data response:', response);
            //     console.log('Data dataJson:', dataJson);

            //     const objetLimitIsr = dataJson.data.dataFound[0];

            //     setLimitCalculos(objetLimitIsr)

            //     if (response.status === 200) {
            //         console.log('El objeto Limit es:', objetLimitIsr)
            //         console.log('El objeto guardandolo en el contexto', limitCalculos)
                
            //         return
            //     }
            // }, 2000);

            // const p = calculateIsrProfit(responseIsrForm)
            // console.log('profit', p)
            // const objetoProfit = { profit: p };
            // console.log('profit en objeto:', objetoProfit.profit)



            //router.push('/dashboard/resumencalculoisr');


            /*   const {objetLimitIsr}= limitCalculos;
            const {incomes}= responseIsrForm;
                console.log('el lowerLimit',objetLimitIsr.lowerLimit);
                console.log('incomes', incomes.incomes);
            const multiplicacion = (objetLimitIsr.lowerLimit * incomes.incomes);
            console.log('La multiplicacion es:', multiplicacion); */
        } catch (error) {
            console.error('Error: ', error)
        }
        
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