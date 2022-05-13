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
import LottieIVACobrado from '../../components/Lotties/Lottie-iva-cobrado';

import next from '../../public/assets/icons/Next.svg';
import prev from '../../public/assets/icons/Previus.svg';

const schemaIvaCobrado = yup.object({
    vatAR: yup.number('Ingrese solo datos numéricos').min(0.0, 'Ingrese una cantidad valida').typeError('Campo requerido').required('El campo es requerido')
})


export default function IVACobrado() {
    const { responseIvaForm, setResponseIvaForm } = useContext(ContextInputsCards);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaIvaCobrado)
    });
    const onSubmitInput = async (data) => {

        console.log('Enviando data...');
        console.log('la data es:', data);
        setResponseIvaForm({ ...responseIvaForm, vatAR: data.vatAR })
        router.push('/dashboard/ivadeducciones');
        console.log('la data acumulada es:', responseIvaForm);

       
        console.log(errors);
    }
    return (
        <Layout>
            <Col sm={12} md={12}>
                <StepperIVA num='0' />
            </Col>

            <LayoutPage>

                <Col sm={12} md={12}>
                    <h1 className="title-card">IVA
                        <span className="span-title-card">
                            Cobrado
                        </span>
                    </h1>
                </Col>

                <Col sm={12} md={10} className="columna-de-prueba">
                    <div className="div-multim-cad" >
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="div-image-card">
                                    <div className="div-container-lottie-card">
                                        <LottieIVACobrado id="lottieIVACobrado" className="lottie-pages" alt="IVA Cobrado" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="div-container-text-card">
                                    <p className="p-text-card">
                                        El IVA trasladado o cobrado, es el IVA que efectivamente
                                        fue cobrado en el mes, este lo podras encontrar desglosado
                                        en tus facturas que efectivamente fueron cobradas en el
                                        mes.</p>
                                    <form className="form-pages-cards-inputs" onSubmit={handleSubmit(onSubmitInput)}>
                                        <div className="div-container-input-card">
                                            <InputMoney nombre="IVA Cobrado" idInput="Input-ivaCobrado" register={register} field='vatAR' />
                                            <p className="text-danger">{errors.vatAR?.message}</p>
                                        </div>
                                        <div className="div-container-buttons-card">
                                            <Button className="btn-pages-np" type="submit" onClick={(e) => { e.preventDefault(), router.push('/dashboard/resumencalculoisr') }}>
                                                <Image className="icon-btn-pages" src={prev} alt="Atrás" />
                                            </Button>
                                            <Button className="btn-pages-np" type="submit" /* onClick={()=> router.push('/dashboard/ivadeducciones')} */>
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