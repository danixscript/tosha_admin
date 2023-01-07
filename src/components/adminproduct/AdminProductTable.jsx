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
            <TableCell align="right"><p className="pnow">כמות מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">תמונה</p></TableCell>
            <TableCell align="right"><p className="pnow">שם מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow"> מספר חברה</p></TableCell>
            <TableCell align="right"><p className="pnow">מחיר</p></TableCell>
            <TableCell align="right"><p className="pnow">מספר מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">מיקום במחסן</p></TableCell>
            <TableCell align="right"><p className="pnow"> מצב מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">  עדכן מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">   מחק מוצר</p></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={row.quantity < row.minimum ? "bgred":''}
            >
              <TableCell align="right" component="th" scope="row">
              <p className="pnow">  כמות {row.quantity}  <span>\</span> {row.minimum}   
               </p>
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
              <p className="pnow">  {row.id}</p>
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
              <TableCell align="right"><p className="pnow">{row.place}</p></TableCell>

              {row.active == 1 ? (
                <TableCell align="right">  <p className="pnow">מופיע בחנות</p> </TableCell>
              ) : (
                <TableCell align="right"> <p className="pnow">מוצר לא מופיע בחנות </p></TableCell>
              )}
                             
                              <TableCell align="right"> <p className="pnow"><NavLink to={'/productpage'} state={{product:row}} >עדכן מוצר</NavLink></p></TableCell>
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
