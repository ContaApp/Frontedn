import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import green from "@material-ui/core/colors/green";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@material-ui/styles";

const newTheme = createTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

 
  export default function Calendar({selectedDate, handleDateChange}) {
      const dateAct = Date.now();
  return (
   
   <>
      <ThemeProvider theme={newTheme}> 
      <DatePicker
        views={["year", "month"]}
        label="Mes y Año"
        helperText="Seleccione el mes y año a declarar."
        minDate={new Date("2022-01-01")}
        maxDate={new Date("2023-01-01")}
        value={selectedDate}
        onChange={handleDateChange}
      />
      </ThemeProvider> 
    </>
   
  );
}
