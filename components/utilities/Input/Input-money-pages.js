import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


export default function InputMoney({id, nombre, register, field }) {
  /*   const nombre = props.nombre;
    const id= props.idInput;
    const register = props.register;
    const field = props.field; */
 
  return (
    <TextField {...register(field)}
    id={id}
    label={nombre}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
  />
);
}


