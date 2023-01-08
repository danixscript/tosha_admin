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
      <Table sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right"><p className="pnow">מספר ספק</p></TableCell>
            <TableCell align="right"><p className="pnow">שם ספק&nbsp;(בע'ם)</p></TableCell>
            <TableCell align="right"><p className="pnow">שם סוכן</p></TableCell>
            <TableCell align="right"><p className="pnow">כתובת</p></TableCell>
            <TableCell align="right"><p className="pnow">אימייל</p></TableCell>
            <TableCell align="right"><p className="pnow">מיקוד</p></TableCell>
            <TableCell align="right"><p className="pnow">טלפון</p></TableCell>
            <TableCell align="right"><p className="pnow">סוג סחורה</p></TableCell>
            <TableCell align="right"><p className="pnow">הוסף מוצרים לספק</p></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
            <p className="pnow">  <NavLink to="/providerinfo" state={{provider:row}}> {row.id } לפרטים </NavLink></p>
              </TableCell>

              <TableCell align="right"><p className="pnow">{row.name}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.agentname}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.address}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.email}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.zipcode}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.phone}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.cat}</p></TableCell>
          {props.permissions == 1 ? 

                    <TableCell align="right" >
                           <div className="flexrow">                                    
                           <p className="pnow"><NavLink to={'/addproductsource'} state={{name:row.name,id:row.id}}>הוסף מוצרים לספק</NavLink></p>
                                      
                                      <button  onClick={()=>{props.popup(row)}}> <p className="pnow">הסר ספק</p></button>
                                      
                                      </div>
                           
                            </TableCell>
                
                    
        :"אתה לא רשאי למחוק ספקים"}
            
            
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
