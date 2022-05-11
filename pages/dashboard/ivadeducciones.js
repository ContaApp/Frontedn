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
import LottieIVADeducciones from '../../components/Lotties/Lottie-iva-deducciones';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';


const schemaIvaDeducciones = yup.object({
    vatFAVOR: yup.number('Ingrese solo datos numéricos').positive('Ingrese una cantidad valida').required('El campo es requerido')
})

export default function IVADeducciones() {
    const { responseIvaForm, setResponseIvaForm } = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIvaDeducciones)
    });
    const onSubmitInput = async (data) => {

        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIvaForm({ ...responseIvaForm, vatFAVOR: data })
        router.push('/dashboard/ivaretenido');
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
                <StepperIVA num='1' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">IVA
                        <span className="span-title-card">
                            Deducciones
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieIVADeducciones id="lottieIVADeducciones" className="lottie-pages" alt="IVA Deducciones" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">El IVA acreditable o dedudible, es aquel IVA que efectivamente
                                        pagaste de gastos relacionados con tu actividad en el mes.
                                        Asi mismos, estos deben contar con su factura para poder
                                        ser deducibles.</p>
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="IVA Acreditable" idInput="Input-ivaAcreditable" register={register} field='vatFAVOR' />
                                            <p className="text-danger">{errors.vatFAVOR?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/ivacobrado') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/ivaretenido')} */>
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