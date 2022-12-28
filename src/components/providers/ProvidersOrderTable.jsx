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





export default function ProvidersOrderTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>מספר הזמנה</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">שם עובד מזמין</TableCell>
            <TableCell align="right">מחיר כולל</TableCell>
            <TableCell align="right"> מצב הזמנה</TableCell>
            <TableCell align="right"> מספר ספק</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.adminorderid}
              className={row.activeorder == 1 ? "":'redbg'}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell align="right" component="th" scope="row">
               <NavLink to='/orderinfo' state={{orderid:row.adminorderid,totalprice:row.totalprice}}>{row.adminorderid }  לפרטים   </NavLink>
              </TableCell>
              <TableCell align="right">{row.date.split('T')[0]}</TableCell>
              <TableCell align="right">{row.employeename}</TableCell>
              <TableCell align="right">{row.totalprice}</TableCell>
              {row.activeorder == 1 ?
                          <TableCell   align="right">הזמנה מאושרת</TableCell>

            :
        <TableCell className='colorred'  align="right">
        הזמנה לא מאושרת
        </TableCell>

      
          }
                        <TableCell align="right">{row.providerid}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
