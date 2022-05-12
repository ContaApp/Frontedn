import * as React from 'react';

import { react, useState, useContext } from 'react';
import {ContextInputsCards} from '../../../contexts/ContextInputsCards';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, month) {
  return { name, month };
}



export default function TableResumenISRMonth() {

const { responseIsrForm} = useContext(ContextInputsCards);
const { responseInputsDate} = useContext(ContextInputsCards);
const month = (responseInputsDate.monthM); 
/*   const rows = [
  createData('COBRANZA', 5000.00),
  createData('DEDUCCIONES', 237),
  createData('UTILIDAD', 6.0),
  createData('ACUMULADO', 4.3),
  createData('ISR RETENIDO', 3.9),
  createData('ISR A PAGAR',  3.9),
]; */
const rows = [
  createData('COBRANZA', `$ ${responseIsrForm.incomes}`),
  createData('DEDUCCIONES', `$ ${responseIsrForm.expenses}`),
  createData('UTILIDAD', `$ ${responseIsrForm.profit}`),
  createData('ACUMULADO', `$ ${responseIsrForm.acumulated}`),
  createData('ISR RETENIDO', `$ ${responseIsrForm.whitholdedIncomeTax}`),
  createData('ISR A PAGAR',  `$ ${responseIsrForm.itToPay}`),
];
  return (
    <TableContainer component={Paper} className="tableResumen">
      <Table sx={{ Width: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="table-head-column">CONCEPTO</TableCell>
            <TableCell className="table-head-column" align="center">{month}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className="table-content-cell table-concept-cell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="table-content-cell" align="center">{row.month}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
