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
      <Table sx={{ minWidth: 1050 }} size="" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow">קוד מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">שם מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">שם ומספר חברה</p></TableCell>
            <TableCell align="right"><p className="pnow">מחיר</p></TableCell>
            <TableCell align="right"><p className="pnow">מחיקת מוצר</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((row) => (
            <TableRow
              key={row.productid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
             <p className="pnow">   {row.productid}</p>
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.productname}</p></TableCell>
              <TableCell align="right"><p className="pnow">({row.providersid}){row.name}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.price} ש"ח</p></TableCell>
             {props.permissions == 1?
                           
                           <TableCell align="right" >
                            <button className='btdelet' id={row.productid} onClick={()=>{props.removeProduct(row)}}>
                           מחק </button>
                           </TableCell>

            :'you cannot delete admins'}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
