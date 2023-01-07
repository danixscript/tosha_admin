import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { NavLink } from "react-router-dom";

export default function OrderInfo(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><p className="pnow">מספר הזמנה</p></TableCell>
            <TableCell align="right"><p className="pnow"> סוג מוצר</p></TableCell>

            <TableCell align="right"><p className="pnow">שם מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow"> מספר מוצר</p></TableCell>

            <TableCell align="right"><p className="pnow">שם עובד מזמין</p></TableCell>
            <TableCell align="right"><p className="pnow">מחיר </p></TableCell>
            <TableCell align="right"><p className="pnow"> כמות מוצר</p></TableCell>
            <TableCell align="right"><p className="pnow">  שם ספק</p></TableCell>

            <TableCell align="right"><p className="pnow"> תמונה</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right"><p className="pnow">{row.adminorderid}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.type}</p></TableCell>

              <TableCell align="right"><p className="pnow">{row.productname}</p></TableCell>

              <TableCell align="right" component="th" scope="row">
             <p className="pnow">   {row.productid}</p>
              </TableCell>
              <TableCell align="right"><p className="pnow">{row.employeename}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.price}ש"ח</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.quantity}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.providername}</p></TableCell>

              

              <TableCell align="right">
                <img src={row.productimg} alt="" className="img maxh" />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
