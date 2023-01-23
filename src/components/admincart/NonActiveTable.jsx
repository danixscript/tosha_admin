import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { NavLink } from "react-router-dom";

import DeleteOrder from '../buttons/DeleteOrder';
import AcceptButton from '../buttons/AcceptButton';




export default function NonActiveTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow">מספר הזמנה</p></TableCell>
            <TableCell align="right"><p className="pnow">שעה/תאריך</p></TableCell>
            <TableCell align="right"><p className="pnow">שם עובד מזמין</p></TableCell>
            <TableCell align="right"><p className="pnow">מחיר כולל</p></TableCell>
            <TableCell align="right"><p className="pnow"> אישור הזמנה</p></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.adminorderid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell align="right" component="th" scope="row">
               <NavLink to='/orderinfo' state={{orderid:row.adminorderid}}><p className="pnow">{row.adminorderid} לפרטים</p></NavLink>
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.date.split('.')[0].split('T')[0]+"/" +row.date.split('.')[0].split('T')[1] }</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.employeename}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.totalprice} ש"ח</p></TableCell>
              {row.activeorder == 1 ?
                          <TableCell align="right"> <p className="pnow">הזמנה מאושרת</p></TableCell>

            :
          <div className="buttons">
              <TableCell align="right"><AcceptButton text={'אשר הזמנה'} data={row} func={props.acceptOrder} /></TableCell>
              <TableCell align="right"><DeleteOrder text={'בטל הזמנה'} data={row} func={props.deleteOrder} /></TableCell>
          </div>
          }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
