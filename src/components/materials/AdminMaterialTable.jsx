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

export default function AdminMaterialTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>כמות מוצר</TableCell>
            <TableCell align="right" ><p className="pnow">תמונה</p></TableCell>
            <TableCell align="right" ><p className="pnow">שם מוצר</p></TableCell>
            <TableCell align="right" ><p className="pnow"> שם חברה</p></TableCell>
            <TableCell align="right" ><p className="pnow">נקודת איזון</p></TableCell>
            <TableCell align="right" ><p className="pnow"> כמות</p></TableCell>
         
            <TableCell align="right" ><p className="pnow"> מחיר מוצר</p></TableCell>
            <TableCell align="right" ><p className="pnow"> מיקום מוצר</p></TableCell>
            <TableCell align="right" ><p className="pnow"> עדכון מוצר</p></TableCell>

            <TableCell align="right" ><p className="pnow"> מחק מוצר</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.materialid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={row.quantity < row.minimum ? 'bgred ':''}
            >
              <TableCell align="right"  component="th" scope="row">
              <p className="pnow">
              {row.quantity}<span>X</span>
              </p>
                
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                <img src={row.materialimg} alt="" className="img maxh30" />
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.materialname}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.providername}</p></TableCell>

              <TableCell align="right"><p className="pnow">
              {row.minimum}</p></TableCell>
              <TableCell align="right">
        <p className="pnow">  {row.quantity}</p>
              </TableCell>
      

              <TableCell align="right"><p className="pnow">{row.materialcoast}.00 ש"ח</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.place}</p></TableCell>

              {/* {props.active == 1 ? (
                <TableCell align="right"> מוצר מופיע בחנות</TableCell>
              ) : (
                <TableCell align="right"> מוצר לא מופיע בחנות </TableCell>
              )} */}


              <TableCell align="right">
                
               <p className="pnow">
               <NavLink to={"/materialpage"} state={{ product: row }}>
                  פרטי מוצר 
                </NavLink>
               </p>
              </TableCell>

              {props.permissions == 1 ? (
                <TableCell align="right">
                  <DeleteOrder
                    text="מחק"
                    data={row}
                    func={props.deleteProduct}
                  ></DeleteOrder>
                </TableCell>
              ) : (
                <TableCell align="right">אין באפשרותך למחוק מוצר זה</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
