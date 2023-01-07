import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';





export default function UsersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow"> מספר לקוח</p></TableCell>
            <TableCell align="right"><p className="pnow">שם</p></TableCell>
            <TableCell align="right"><p className="pnow">מייל </p></TableCell>
            <TableCell align="right"><p className="pnow">  טלפון</p></TableCell>
            <TableCell align="right"><p className="pnow">כתובת</p></TableCell>
            <TableCell align="right"><p className="pnow"> הסר לקוח </p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                     <TableCell align="right">   
                     <NavLink to={'/userinfi'} state={{data:row}} >
          <p className="pnow">              לפרטים  
              {row.id}  </p>
          </NavLink>

              </TableCell>
          
              <TableCell align="right">
                <NavLink to={'/userinfi'} state={{data:row}} >
              <p className="pnow">  {row.name}</p>
                </NavLink>
                </TableCell>
              <TableCell align="right">
                <p className="pnow">({row.email})</p>
              </TableCell>
                          
                            <TableCell align="right">
                              <p className="pnow">({row.phone})</p>
                            </TableCell>

                            <TableCell align="right">
                              <p className="pnow">{row.address}</p>
                            </TableCell>



                            <TableCell align="right"><button onClick={()=>{props.Removeuser(row.id)}} >מחק לקוח</button></TableCell>


           
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
