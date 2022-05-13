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
import LottieIVAAcreditable from '../../components/Lotties/Lottie-iva-a-acreditar';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

//se importa servicio 
import { createLogbooks } from '../../services/logbooks/index';


import { calculateVat } from '../../lib/calculosIVA';

const schemaIvaAcreditable = yup.object({
    vatFAVOR: yup.number('Ingrese solo datos numéricos').min(0.0, 'Ingrese una cantidad valida').typeError('Campo requerido').required('El campo es requerido')
})


export default function IVADeducciones() {
    const { responseIvaForm, setResponseIvaForm } = useContext(ContextInputsCards);
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const {responseInputsDate, setResponseInputsDate} = useContext(ContextInputsCards);
    const { responseInputsForm, setResponseInputsForm } = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIvaAcreditable)
    });
    const onSubmitInput = async (data) => {

        //Calculo de vat
        const ivaVat =calculateVat(responseIvaForm);
        console.log('ivaVat: ', ivaVat);

        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIvaForm({ ...responseIvaForm, vatFAVOR: data.vatFAVOR, vat:ivaVat}); 
    
        console.log('la data acumulada es:', responseIvaForm);
        
        const objetoUnion = { ...responseInputsDate, ...responseIsrForm, ...responseIvaForm }
        //router.push('/dashboard/resumencalculoiva');
       
        console.log('La data a enviar', objetoUnion);
      
         
       console.log('soy el objeto responseInputsDate',responseInputsDate);
       console.log('soy el objeto responseIsrForm',responseIsrForm);
       console.log('soy el objeto responseIvaForm',responseIvaForm);

        const bodyData ={ 
            year:responseInputsDate.year,
            month: responseInputsDate.month,
            isr:{
                incomes: responseIsrForm.incomes,
            expenses:responseIsrForm.expenses,
            profit:responseIsrForm.profit,
            fixRate:responseIsrForm.objetLimitIsr.fixedRate,
            itPercent: responseIsrForm.objetLimitIsr.perCentAboveLowerLimit,
            whitholdedIncomeTax:responseIsrForm.whitholdedIncomeTax,
            itToPay: responseIsrForm.itToPay
               
            },
            iva:{
                vatAP: responseIvaForm.vatAP,
                vatAR: responseIvaForm.vatAR,
                vatWH: responseIvaForm.vatWH,
                vatFAVOR: data.vatFAVOR,
                vat: ivaVat
            }
        }
        console.log('El objeto a enviar en petición es:', bodyData);

        setResponseInputsForm({bodyData});
         //Aqui se maneja la promesa
        //const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2FhMjRhYmU3ZDFmM2NlOWQ4Y2I2NyIsImlhdCI6MTY1MjIwNDE0MSwiZXhwIjoxNjUyODA4OTQxfQ.p8j-bDRKOFCv482FolmK3xSxduWgTemkog9jerBJ59o';
        const token= window.localStorage.getItem('LoggedDataUser');
        console.log('tu token en iva acreditable es:',token);
        console.log('EL tipo de token es:' ,typeof(token))
        const response = await createLogbooks( bodyData, token);
        const dataJson = await response.json();

        console.log('Data response:', response);
        console.log('Data dataJson:', dataJson);

        if (response.status === 200){ 
         router.push('/dashboard/resumencalculoiva');
        }  
    }
        return (
            <Layout>
                <Col sm={12} md={12}>
                    <StepperIVA num='3' />
                </Col>

                <LayoutPage>

                    <Col sm={12} md={12}>
                        <h1 className="title-card">IVA
                            <span className="span-title-card">
                                para Acreditar
                            </span>
                        </h1>
                    </Col>

                    <Col sm={12} md={10} className="columna-de-prueba">
                        <div className="div-multim-cad" >
                            <Row>
                                <Col sm={12} md={5}>
                                    <div className="div-image-card">
                                        <div className="div-container-lottie-card">
                                            <LottieIVAAcreditable id="lottieIVAAcreditar" className="lottie-pages" alt="IVA para Acreditar" />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={7}>
                                    <div className="div-container-text-card">
                                        <p className="p-text-card"> 
                                        El IVA para/por Acreditar se da cuando existe un saldo a favor con anterioridad y
                                        se utiliza para disminuir el pago del mes a declarar. Este solo se podrá ingresar hasta el monto a pagar,
                                        es decir, no se podrá utilizar de más.
                                        </p>
                                        <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                            <div className="div-container-input-card">
                                                <InputMoney nombre="IVA para Acreditar" idInput="Input-ivaAcreditar" register={register} field='vatFAVOR' />
                                            </div>
                                            <div>
                                            <p className="text-danger">{errors.vatFAVOR?.message}</p>
                                            </div>
                                            <div className="div-container-buttons-card">
                                                <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/ivaretenido') }}>
                                                    <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                                </Button>
                                                <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/resumencalculoiva')} */>
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