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
            <TableCell>כמות מוצר</TableCell>
            <TableCell align="right">תמונה</TableCell>

            <TableCell align="right">שם מוצר</TableCell>
            
            <TableCell align="right">שם ומספר חברה</TableCell>
            <TableCell align="right">מחיר</TableCell>

            <TableCell align="right">קוד מוצר</TableCell>
            <TableCell align="right">מחיקת מוצר</TableCell>

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
             <option className='theAmount' value={row.amount}>{row.amount}</option>
             {Array.from({ length: 500 }).map((_,i)=>{
              if(i % 10 ==0 && i > 2){
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
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">({row.providersid}){row.name}</TableCell>
              <TableCell align="right">{row.price}.00 -- {row.price * row.amount}.00 שח</TableCell>
                          
                            <TableCell align="right">({row.productid})</TableCell>

       


          
                           <TableCell align="right" ><button id={row.productid} onClick={()=>{props.removeProductFromCart(row)}}>מחק מוצר זה  {row.productid}</button></TableCell>

           
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
