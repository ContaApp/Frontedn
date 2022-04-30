import react from 'react';
import LayoutPages from '../components/utilities/layout-page/LayoutPages';
import Layout from '../components/utilities/Layout';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { fontFamily } from '@mui/system';
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

            <Box
                component="form"
                sx={{
                    maxWidth: '513px',
                    maxHeight: '526px',
                    padding: '1rem'
  }
                }
                noValidate
                autoComplete="off"

            >
            <h2 className='title-card'>
                    Crear una cuenta
                </h2>
                <p className='p-text-card'>
                    Persona fisica con actividad profesional y empresarial
                </p>
                <TextField
                    id="outlined-full-width"
                    label="Nombre Completo"
                    className='register-input'
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
                    style={{ margin: 8 }}
                    placeholder="RFC"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: '#EBA53D' },
                        shrink: true
                    }}
                    variant="outlined"
                />
                <h2 className='title-card'>
                    Datos acceso
                </h2>

                <TextField
                    id="outlined-full-width"
                    label="Correo electronico"
                    style={{ margin: 8 }}
                    placeholder="Correo electronico"
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
                    label="Contraseña"
                    style={{ margin: 8 }}
                    placeholder="Contraseña"
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
                    label="Confirmar contraseña"
                    style={{ margin: 8 }}
                    placeholder="Confirmar contraseña"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: '#EBA53D' },
                        shrink: true
                    }}
                    variant="outlined"
                />
            </Box>


        </Layout>
    )
}

export default Register 