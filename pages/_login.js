import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Layout from '../components/utilities/Layout';
import TextField from '@mui/material/TextField';
import React from "react";

function Login() {
    const router = useRouter();
    return (
        <Layout>
        <section className="register-page-container">
            <form className="register-page-section-form">
                <h2 className='title-card text-center'>Iniciar <span className='yellow-text'>Sesión</span></h2>
                <p className='p-text-card text-center'>
                   Nunca compartiremos tus datos con terceros
                </p>

                <TextField
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
                    className='login-input'
                />
                <TextField
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
                    className='login-input'
                />
                <Button className="btn-contapp-navbar" onClick={()=> router.push('/dashboard/dashboardHome')}>
                    <span className="text-btn-landing">Iniciar Sesión</span>
                </Button>
            </form>
        </section>
    </Layout>
    )
}

export default Login;