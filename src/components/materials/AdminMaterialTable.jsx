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
            <TableCell align="right">תמונה</TableCell>
            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="right"> שם חברה</TableCell>
            <TableCell align="right">נקודת איזון</TableCell>
            <TableCell align="right"> כמות</TableCell>
         
            <TableCell align="right"> מחיר מוצר</TableCell>
            <TableCell align="right"> מיקום מוצר</TableCell>
            <TableCell align="right"> עדכון מוצר</TableCell>

            <TableCell align="right"> מחק מוצר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.materialid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.quantity}
                <span>X</span>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                <img src={row.materialimg} alt="" className="img maxh30" />
              </TableCell>
              <TableCell align="right">{row.materialname}</TableCell>
              <TableCell align="right">{row.providername}</TableCell>

              <TableCell align="right">{row.minimum}</TableCell>
              <TableCell align="right">
          {row.quantity}
              </TableCell>
      

              <TableCell align="right">{row.materialcoast}.00</TableCell>
              <TableCell align="right">{row.place}</TableCell>

              {/* {props.active == 1 ? (
                <TableCell align="right"> מוצר מופיע בחנות</TableCell>
              ) : (
                <TableCell align="right"> מוצר לא מופיע בחנות </TableCell>
              )} */}


              <TableCell align="right">
                
                <NavLink to={"/materialpage"} state={{ product: row }}>
                  פרטי מוצר והגדרות
                </NavLink>
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
