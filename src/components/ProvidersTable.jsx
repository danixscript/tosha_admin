import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';



 

export default function ProvidersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">מספר ספק</TableCell>
            <TableCell align="right">שם ספק&nbsp;(בע'ם)</TableCell>
            <TableCell align="right">שם סוכן&nbsp;(g)</TableCell>
            <TableCell align="right">כתובת&nbsp;(g)</TableCell>
            <TableCell align="right">אימייל&nbsp;(g)</TableCell>
            <TableCell align="right">מיקוד&nbsp;(g)</TableCell>
            <TableCell align="right">טלפון&nbsp;(g)</TableCell>
            <TableCell align="right">סוג סחורה&nbsp;(g)</TableCell>
            <TableCell align="right" >הוסף מוצרים לספק</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <NavLink to="/providerinfo" state={{provider:row}}> לפרטים {row.id}</NavLink>
              </TableCell>

              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.agentname}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.zipcode}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.cat}</TableCell>
          {props.permissions == 1 ? 

                    <TableCell align="right" >
                           <div className="flexrow">                                    <NavLink to={'/addproductsource'} state={{name:row.name,id:row.id}}>הוסף מוצרים לספק</NavLink>
                                      
                                      <button  onClick={()=>{props.popup(row)}}>הסר ספק</button></div>
                           
                            </TableCell>
                
                    
        :"אתה לא רשאי למחוק ספקים"}
            
            
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
