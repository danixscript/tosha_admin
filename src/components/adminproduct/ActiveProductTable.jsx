import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import DeleteOrder from "../buttons/DeleteOrder";

export default function ActiveProductTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>קוד מוצר</TableCell>
            <TableCell align="right"> <p className="pnow">תמונה</p></TableCell>
            <TableCell align="right"> <p className="pnow">שם מוצר</p></TableCell>
            <TableCell align="right"> <p className="pnow"> מספר חברה</p></TableCell>
            <TableCell align="right"> <p className="pnow">מחיר</p></TableCell>
            <TableCell align="right"> <p className="pnow">כמות</p></TableCell>
            <TableCell align="right"> <p className="pnow">מיקום במחסן</p></TableCell>
            <TableCell align="right"> <p className="pnow"> מצב מוצר</p></TableCell>
            <TableCell align="right"> <p className="pnow">  עדכן מוצר</p></TableCell>
            <TableCell align="right"> <p className="pnow">   מחק מוצר</p></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
           row.active == 1 ? 
           <TableRow
           key={row.id}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
           <TableCell component="th" scope="row">
          <p className="pnow"> {row.id}</p>
           </TableCell>
           <TableCell component="th" scope="row">
             <img src={row.productimg} alt="" className="img maxh30" />
           </TableCell>
           <TableCell align="right"><p className="pnow">{row.itemname}</p></TableCell>
           <TableCell align="right">
             <p className="pnow">({row.idprovider}){row.providername}</p>
           </TableCell>
           <TableCell align="right">
             <p className="pnow">{row.price}.00  ש"ח</p>
           </TableCell>

           <TableCell align="right">
            <p className="pnow"> {row.quantity}</p>
          
           </TableCell>
           <TableCell align="right"><p className="pnow">{row.place}</p></TableCell>

           {props.active == 1 ? (
             <TableCell align="right">   <p className="pnow">מוצר מופיע בחנות</p></TableCell>
           ) : (
             <TableCell align="right">  <p className="pnow">מוצר לא מופיע בחנות</p>   </TableCell>
           )}
                          
                           <TableCell align="right"> <p className="pno"><NavLink to={'/productpage'} state={{product:row}} >עדכן מוצר</NavLink></p></TableCell>
                           <TableCell align="right"><DeleteOrder text='מחק' data={row} func={props.deleteProduct} ></DeleteOrder></TableCell>

         </TableRow>:
     ""
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
