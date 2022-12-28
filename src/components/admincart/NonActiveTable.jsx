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
            <TableCell>מספר הזמנה</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">שם עובד מזמין</TableCell>
            <TableCell align="right">מחיר כולל</TableCell>
            <TableCell align="right"> אישור הזמנה</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.adminorderid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell component="th" scope="row">
               <NavLink to='/orderinfo' state={{orderid:row.adminorderid}}>{row.adminorderid}</NavLink>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.employeename}</TableCell>
              <TableCell align="right">{row.totalprice}</TableCell>
              {row.activeorder == 1 ?
                          <TableCell align="right">הזמנה מאושרת</TableCell>

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
