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





export default function UserInfoOrder(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">מספר הזמנה</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">  מחיר</TableCell>
            <TableCell align="right"> מצב הזמנה</TableCell>
            <TableCell align="right">  מאושרות\מבוטלות</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              className={row.active == 1 ? "":'redbg'}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell align="right" component="th" scope="row">
               <NavLink to='/userorderinfo' state={{id:row.id}}>{row.id }  לפרטים   </NavLink>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.orderprice}</TableCell>
              <TableCell align="right">{row.active == 1 ? 'הזמנה שולמה בהצלחה':"הזמנה לא שולמה"}</TableCell>
              {row.uptofiftin != null ? 
              
              <TableCell align="right">{row.uptofiftin == 1 ? 'מעל 15 אנשים' : "הזמנה מאושרת"}</TableCell>

              
              :                        <TableCell align="right" className='censeldorder'>ההזמנה בוטלה</TableCell>
            }
        


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
