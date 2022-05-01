import * as React from 'react';
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

const rows = [
  createData('COBRANZA', 5000.00),
  createData('DEDUCCIONES', 237),
  createData('UTILIDAD', 6.0),
  createData('ACUMULADO', 4.3),
  createData('ISR RETENIDO', 3.9),
  createData('ISR A PAGAR',  3.9),
];

export default function TableResumenISRMonth() {
  return (
    <TableContainer component={Paper} className="tableResumen">
      <Table sx={{ Width: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="table-head-column">CONCEPTO</TableCell>
            <TableCell className="table-head-column" align="center">MONTH</TableCell>
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
