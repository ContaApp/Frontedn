import react from 'react';
import LayoutPages from '../components/utilities/layout-page/LayoutPages';
import Layout from '../components/utilities/Layout';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { fontFamily } from '@mui/system';
import { Button } from 'react-bootstrap';
import LayoutPage from '../components/utilities/layout-page/LayoutPages';
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

function Register() {
    return (
        <Layout>
            <section className="register-page-container">
                <form className="register-page-section-form">
                    <h2 className='title-card text-center'>Crear una <span className='yellow-text'>cuenta</span></h2>
                    <p className='p-text-card text-center'>
                        Persona fisica con actividad profesional y empresarial
                    </p>
                    <TextField
                        id="outlined-full-width"
                        label="Nombre Completo"
                        className="register-input"
                        placeholder="Nombre completo"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                    />
                    <TextField
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
                    <h2 className='title-card text-center'>
                        Datos acceso
                    </h2>

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
                        className='register-input'
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Contraseña"
                        placeholder="Contraseña"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                        className='register-input'
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Confirmar contraseña"
                        placeholder="Confirmar contraseña"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#EBA53D' },
                            shrink: true
                        }}
                        variant="outlined"
                        className='register-input'
                    />
                    <Button className="Button-Register">
                        <span className="text-btn-landing">Crear cuenta</span>
                    </Button>
                </form>
            </section>
        </Layout>
    )
}

export default Register 