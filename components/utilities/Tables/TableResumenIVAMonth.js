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
  createData('IVA Cobrado', 5000.00),
  createData('IVA Pagado', 237),
  createData('IVA Retnido', 6.0),
  createData('IVA a Cargo (favor)', 4.3),
  createData('IVA por Acreditar', 3.9),
];

export default function TableResumenIVAMonth() {
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
