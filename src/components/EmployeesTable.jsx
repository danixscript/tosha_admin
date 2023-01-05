import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function EmployeesTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>שם</TableCell>
            <TableCell align="right">מספר</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">טלפון</TableCell>

            <TableCell align="right">הרשאות</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.workers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">          
                   <input type="number" placeholder={row.phone}  onChange={props.getphone} />
              <button onClick={()=>{props.updateEmployeePhone(row)}} >עדכן</button>
                            
                            </TableCell>

              <TableCell align="right">
           
{props.permissions == 1 ?
          <div>
            {row.permissions == 0 ? 
                 <button onClick={()=>{props.updateEmployeePermissieons(1,row.id)}} > תן הרשאה</button>
                :     <button onClick={()=>{props.updateEmployeePermissieons(0,row.id)}} > הורד הרשאה</button>}
          </div>

:''}             
                </TableCell>

            

             {props.permissions == 1?
                           <TableCell align="right" ><button id={row.id} onClick={props.removeEmployee}>remove number  {row.id}</button></TableCell>

            :'you cannot delete admins'}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
