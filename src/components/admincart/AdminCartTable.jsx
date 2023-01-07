import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function AdminCartTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"> <p className="pnow">כמות מוצר</p></TableCell>
            <TableCell align="right"> <p className="pnpw">תמונה</p></TableCell>

            <TableCell align="right"> <p className="pnpw">שם מוצר</p></TableCell>
            
            <TableCell align="right"> <p className="pnpw">שם ומספר חברה</p></TableCell>
            <TableCell align="right"> <p className="pnpw">מחיר</p></TableCell>

            <TableCell align="right"> <p className="pnpw">קוד מוצר</p></TableCell>
            <TableCell align="right"> <p className="pnpw">מחיקת מוצר</p></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.productid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                     <TableCell align="right">   
              {row.amount}
             <select className='flexcol' onChange={(e)=>{props.changeAmount(row,e)}} name="" id="">
             <option className='theAmount' value={row.amount}><p className="pnow">{row.amount}</p></option>
             {Array.from({ length: 500 }).map((_,i)=>{
              if(i >0){
                  return(
                 
                    <option  value={i}>{i}</option>
                  
                 
                )
              } 
              
              })}
             </select>
             

              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.productimg} alt="" className="img maxh30" />
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.productname}</p></TableCell>
              <TableCell align="right"><p className="pnow">({row.providersid}){row.name}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.price}.00 ש"ח -- {row.price * row.amount}.00 ש"ח</p></TableCell>
                          
                            <TableCell align="right"><p className="pnow">({row.productid})</p></TableCell>

       


          
                           <TableCell align="right" ><button id={row.productid} onClick={()=>{props.removeProductFromCart(row)}}>מחק מוצר זה  {row.productid}</button></TableCell>

           
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
