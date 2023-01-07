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





export default function OrdersAcordeon(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right"><p className="pnow"> מספר הזמנה</p></TableCell>
          <TableCell align="right"><p className="pnow"> תאריך</p></TableCell>
          <TableCell align="right"><p className="pnow"> שם ספק </p></TableCell>
          <TableCell align="right"><p className="pnow">  מספר ספק</p></TableCell>

          <TableCell align="right"><p className="pnow"> שם עובד מזמין</p></TableCell>
          <TableCell align="right"><p className="pnow"> מחיר כולל</p></TableCell>
          <TableCell align="right"><p className="pnow">  מצב הזמנה</p></TableCell>

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
             
               <p className="pnow"><NavLink to='/orderinfo' state={{orderid:row.adminorderid,totalprice:row.totalprice}}>{row.adminorderid }  לפרטים   </NavLink></p>
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.date.split('.')[0]}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.providername}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.providerid}</p></TableCell>


              <TableCell align="right"><p className="pnow">{row.employeename}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.totalprice} ש"ח  </p></TableCell>
              {row.activeorder == 1 ?
                          <TableCell   align="right"><p className="pnow">הזמנה מאושרת</p></TableCell>

            :
<TableCell className='colorred'  align="right">
<p className="pnow">הזמנה לא מאושרת</p>
</TableCell>

      
          }


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
