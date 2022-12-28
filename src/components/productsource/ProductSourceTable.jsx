import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function ProductSourceTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>קוד מוצר</TableCell>
            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="right">שם ומספר חברה</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">מחיקת מוצר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((row) => (
            <TableRow
              key={row.productid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productid}
              </TableCell>
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">({row.providersid}){row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
             {props.permissions == 1?
                           <TableCell align="right" ><button id={row.productid} onClick={()=>{props.removeProduct(row)}}>מחק מוצר זה  {row.productid}</button></TableCell>

            :'you cannot delete admins'}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
