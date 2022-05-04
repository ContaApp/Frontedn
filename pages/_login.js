import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Layout from '../components/utilities/Layout';
import TextField from '@mui/material/TextField';
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// Aqui se importa el servicio
import {loginUser} from '../services/users/index';


const schemaLogin = yup.object({
    email: yup.string().email('El email no es valido').required('El campo es requerido'),
    password: yup.string().min(8, 'La longitud min es de 8 caracteres').required('El campo es requerido')
})

function Login() {
    const router = useRouter();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schemaLogin)
      });

     const onSubmitLogin = async (data)=>{
         console.log('Enviando data...');
        console.log(data);
        const email = data.email;
        const password = data.password;
        //Aqui se maneja la promesa
        const response = await loginUser(email, password);
        const dataJson = await response.json();

        console.log('Data response:',response);
        console.log('Data dataJson:',dataJson);

     }
     console.log(errors);
    

    return (
        <Layout>
        <section className="register-page-container">
            <form onSubmit ={handleSubmit(onSubmitLogin)} className="register-page-section-form">
                <h2 className='title-card text-center'>Iniciar <span className='yellow-text'>Sesión</span></h2>
                <p className='p-text-card text-center'>
                   Nunca compartiremos tus datos con terceros
                </p>

                <TextField {...register("email")}
                    id="outlined-full-width"
                    label="Correo electronico"
                    placeholder="Correo electronico"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: '#EBA53D' },
                        shrink: true
                    }}
                    variant="outlined"
                    className='register-input'
                />
                <p className = "text-danger">{errors.email?.message}</p>
                <TextField {...register("password")}
                    id="outlined-full-width"
                    label="Contraseña"
                    placeholder="Ingrese Contraseña"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: '#EBA53D' },
                        shrink: true
                    }}
                    variant="outlined"
                    className='register-input'
                />
                <p className = "text-danger">{errors.password?.message}</p>
                <Button type = 'submit' className="btn-contapp-navbar" /* onClick={()=> router.push('/dashboard/dashboardHome')} */>
                    <span className="text-btn-landing">Iniciar Sesión</span>
                </Button>
            </form>
        </section>
    </Layout>
    )
}

export default Login;