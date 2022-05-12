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
import Calendar from '../../components/utilities/Calendar';

import imagenDashboardHome from '../../public/assets/images/dashboard/001-img-dashboard.svg';

export default function DashboardHome() {

    const router = useRouter();
    const { selectedDate, handleDateChange } = useContext(ContextInputsCards);
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const {responseInputsDate, setResponseInputsDate} = useContext(ContextInputsCards);


    let fechaObjet = {
        month: '', 
        year: '',
        monthM: ''
    }

    function getDate(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fecha = { selectedDate };
    console.log(fecha);
    const fechaJ = selectedDate.toJSON();
    console.log("la fecha Json", fechaJ);
    const mesutcf = (selectedDate.getUTCMonth() + 1);
    console.log("El mes eleccionado:", mesutcf);
    console.log("El mes utcf:", mesutcf);
    const year = selectedDate.getUTCFullYear();
    console.log('el año', selectedDate.getUTCFullYear());
    const nameMonth = meses[mesutcf-1];
    console.log('nombre mes', nameMonth);
    const nameMonthM = meses[mesutcf-1].toUpperCase();

    fechaObjet = {
        month: nameMonth, 
        year: year,
        monthM: nameMonthM
    }
    console.log(fechaObjet);
    console.log('Recibo', fechaObjet);
    return fechaObjet;
    }
    

    function onSubmitInput(){
        getDate();
        const fechaObjetR = fechaObjet;
        const {month, year}= fechaObjet;
        console.log('Recibo objeto', fechaObjet, 'mes:', month, 'año:', year);
        setResponseInputsDate({...responseInputsDate, month: fechaObjet.month , year: fechaObjet.year, monthM: fechaObjet.monthM})
        setResponseIsrForm({ ...responseIsrForm, });
        console.log('Data', responseIsrForm);
        console.log('Data', responseInputsDate);
        router.push('/dashboard/isrcobranza');
    }

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
                                    <Calendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
                                </div>
                                <div>
                                    <Button className="btn-landing" type="submit" onClick={(e) => { e.preventDefault(), onSubmitInput()} }>
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