import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
/* import FormHelperText from '@mui/material/FormHelperText'; */
import FormControl from '@mui/material/FormControl';
/* import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'; */

export default function InputMoney(props) {
    const nombre = props.nombre;
    const id= props.idInput;
  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">{nombre}</InputLabel>
          <OutlinedInput
            id={id}
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label={nombre}
            defaultValue="Normal"
            placeholder="Ingrese la cantidad" 
            variant="outlined"
            required= {true}
            type= "number"
          />
        </FormControl>
      </div>
    </Box>
  );
}

