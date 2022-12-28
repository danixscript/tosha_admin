import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function UsersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> מספר לקוח</TableCell>
            <TableCell align="right">שם</TableCell>
            <TableCell align="right">מייל </TableCell>
            <TableCell align="right">  טלפון</TableCell>
            <TableCell align="right">כתובת</TableCell>
            <TableCell align="right"> השאה לקוח </TableCell>
            <TableCell align="right"> הסר לקוח </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                     <TableCell align="right">   
              {row.id}
          

              </TableCell>
          
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">({row.email})</TableCell>
                          
                            <TableCell align="right">({row.phone})</TableCell>

                            <TableCell align="right">{row.address}</TableCell>



                            <TableCell align="right"><button onClick={row.band == 1 ?()=>{props.unBandUser(row.id)} :()=>{props.bandUser(row.id)}} > {row.band == 1 ? 'הפעל לקוח':'השאה לקוח'}</button></TableCell>
                            <TableCell align="right"><button onClick={()=>{props.Removeuser(row.id)}} >מחק לקוח</button></TableCell>


           
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
