import {react, useState} from 'react';
import {useRouter} from 'next/router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LayoutPages from '../components/utilities/layout-page/LayoutPages';
import Layout from '../components/utilities/Layout';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { fontFamily } from '@mui/system';
import { Button } from 'react-bootstrap';
// Aqui se importa el servicio
import {createAccount} from '../services/users/index';



const styles = theme => ({
    textField: {
        width: '329px',
        height: '45px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'red'
    }
});

const schemaRegister = yup.object({
    name: yup.string().min(3, 'La longitud min es de 3 caracteres').required('El campo es requerido'),
    surName: yup.string().min(3, 'La longitud min es de 3 caracteres').required('El campo es requerido'),
    rfc: yup.string().min(13, 'La longitud min es de 13 caracteres').max(13,'la longitud max es de 13 caracteres').required('El campo es requerido'),
    email: yup.string().email('El email no es valido').required('El campo es requerido'),
    password: yup.string().min(8, 'La longitud min es de 8 caracteres').required('El campo es requerido'),
    passwordConfirm: yup
        .string()
        .min(8, 'La longitud min es de 8 caracteres')
        .required('El campo es requerido')
        .oneOf([yup.ref('password')], 'La contraseña no coincide')
  })


function Register() {
    const router = useRouter();
    const [message, setMessage ] = useState(null);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schemaRegister)
      });

     const onSubmitRegister = async (data)=>{
         console.log('Enviando data...');
        console.log(data);

        delete data.passwordConfirm //se elimina la propiedad passwordConfirm del objeto data
        //Aqui se maneja la promesa
        const response = await createAccount(data);
        const dataJson = await response.json();

        console.log('Data response:',response);
        console.log('Data dataJson:',dataJson);

        if (response.status === 200){
            router.push('/login')
            return
        }else {
           // Si ocurre un error
        setMessage ('No pudimos registrar tu cuenta, vuelve a intentarlo'); 
       
        }
        
     }
     console.log(errors);
    return (
        <Layout>
            <section className="register-page-container">
                <form className="register-page-section-form" onSubmit={handleSubmit(onSubmitRegister)}>
                    <h2 className='title-card text-center'>Crear una <span className='yellow-text'>cuenta</span></h2>
                    <p className='p-text-card text-center'>
                        Persona fisica con actividad profesional y empresarial
                    </p>
                    <TextField {...register("name")}
                        id="outlined-full-width"
                        label="Nombre"
                        className="register-input"
                        placeholder="Nombre"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                    />
                    <p className = "text-danger">{errors.name?.message}</p>
                     <TextField {...register("surName")}
                        id="outlined-full-width"
                        label="Apellido"
                        className="register-input"
                        placeholder="Apellido Paterno"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                    />
                    <p className = "text-danger">{errors.surName?.message}</p>
                    <TextField {...register("rfc")}
                        id="outlined-full-width"
                        label="RFC"
                        placeholder="RFC"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                        className='register-input'
                    />
                    <p className = "text-danger">{errors.rfc?.message}</p>

                    <h2 className='title-card text-center'>
                        Datos acceso
                    </h2>

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
                        placeholder="Contraseña"
                        fullWidth
                        margin="normal"
                        type="password"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                        className='register-input'
                    />
                    <p className = "text-danger">{errors.password?.message}</p>
                    <TextField {...register("passwordConfirm")}
                        id="outlined-full-width"
                        label="Confirmar contraseña"
                        placeholder="Confirmar contraseña"
                        fullWidth
                        margin="normal"
                        type="password"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                        className='register-input'
                    /><p className = "text-danger">{errors.passwordConfirm?.message}</p>
                    <Button type ="submit" className="btn-contapp-navbar" >
                        <span className="text-btn-landing">Crear cuenta</span>
                    </Button>
                    {
                        message &&  <p className="text-danger" > {message}</p>
                    }
                </form>
            </section>
        </Layout>
    )
}

export default Register 