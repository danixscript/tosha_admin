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
import '../../css/App.css'

export default function AdminProductTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>כמות מוצר</TableCell>
            <TableCell align="right">תמונה</TableCell>
            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="right"> מספר חברה</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">מספר מוצר</TableCell>
            <TableCell align="right">מיקום במחסן</TableCell>
            <TableCell align="right"> מצב מוצר</TableCell>
            <TableCell align="right">  עדכן מוצר</TableCell>
            <TableCell align="right">   מחק מוצר</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={row.quantity < row.minimum ? "bgred":''}
            >
              <TableCell component="th" scope="row">
                {row.quantity}
                <span>X</span>
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.productimg} alt="" className="img maxh30" />
              </TableCell>
              <TableCell align="right">{row.itemname}</TableCell>
              <TableCell align="right">
                ({row.idprovider}){row.providername}
              </TableCell>
              <TableCell align="right">
                {row.price}.00 
              </TableCell>

              <TableCell align="right">
                {row.id}
                {/* <select className='flexcol' onChange={(e)=>{props.changeAmount(row,e)}} name="" id="">
             <option className='theAmount' value={row.amount}>{row.amount}</option>
             {Array.from({ length: 500 }).map((_,i)=>{
              if(i % 10 ==0 && i > 2){
                  return(
                 
                    <option  value={i}>{i}</option>
                  
                 
                )
              }
              
              })}
             </select> */}
              </TableCell>
              <TableCell align="right">{row.place}</TableCell>

              {row.active == 1 ? (
                <TableCell align="right">  מופיע בחנות</TableCell>
              ) : (
                <TableCell align="right"> מוצר לא מופיע בחנות </TableCell>
              )}
                             
                              <TableCell align="right"> <NavLink to={'/productpage'} state={{product:row}} >עדכן מוצר</NavLink></TableCell>
{props.permissions == 1 ? 
                              <TableCell align="right"><DeleteOrder text='מחק' data={row} func={props.deleteProduct} ></DeleteOrder></TableCell>
:                              <TableCell align="right">אין באפשרותך למחוק מוצר זה</TableCell>
}
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
