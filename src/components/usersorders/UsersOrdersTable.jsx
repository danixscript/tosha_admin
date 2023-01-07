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





export default function UsersOrdersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow">מספר הזמנה</p></TableCell>
            <TableCell align="right"><p className="pnow">  מייל לקוח</p></TableCell>

            <TableCell align="right"><p className="pnow">תאריך</p></TableCell>
            <TableCell align="right"><p className="pnow">  מחיר</p></TableCell>
            <TableCell align="right"><p className="pnow"> מצב הזמנה</p></TableCell>
            <TableCell align="right"><p className="pnow">  מאושרות\מבוטלות</p></TableCell>

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
               <NavLink to='/userorderinfo' state={{id:row.id}}><p className="pnow">{row.id }  לפרטים </p>  </NavLink>
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.useremail}</p></TableCell>

              <TableCell align="right"><p className="pnow">{row.userorderdate.split('.')[0]}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.orderprice} ש"ח  </p></TableCell>
              <TableCell align="right">{row.active == 1 ? <p className="pnow">'הזמנה שולמה בהצלחה'</p>: <p className="pno">"הזמנה לא שולמה"</p> }</TableCell>
              {row.uptofiftin != null ? 
              
              <TableCell align="right">{row.uptofiftin == 1 ? <p className="pnow">'מעל 15 אנשים'</p> : <p className="pnow">"הזמנה מאושרת"</p> }</TableCell>

              
              :                        <TableCell align="right" className='censeldorder'><p className="pnow">ההזמנה בוטלה</p></TableCell>
            }
        


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
