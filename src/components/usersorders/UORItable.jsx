import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../App.css'
import { NavLink } from "react-router-dom";





export default function UORItable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow"> תמונה</p></TableCell>
            <TableCell align="right"><p className="pnow"> שם</p></TableCell>

            <TableCell align="right"><p className="pnow">מחיר</p></TableCell>
            <TableCell align="right"><p className="pnow">  כמות</p></TableCell>
            <TableCell align="right"><p className="pnow">  סוג הזמנה</p></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell align="right" component="th" scope="row">
                <img src={row.userproductimg} alt="" className="img maxh" />
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.userproductname} </p></TableCell>

              <TableCell align="right"><p className="pnow">{row.userproductprice} ש"ח</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.userproductquantity}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.ordertype == 'SIT' ? "בישיבה":"TA"}</p></TableCell>
            
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
