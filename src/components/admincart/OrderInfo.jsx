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
            <TableCell align="right">מספר הזמנה</TableCell>
            <TableCell align="right"> סוג מוצר</TableCell>

            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="right"> מספר מוצר</TableCell>

            <TableCell align="right">שם עובד מזמין</TableCell>
            <TableCell align="right">מחיר </TableCell>
            <TableCell align="right"> כמות מוצר</TableCell>
            <TableCell align="right">  שם ספק</TableCell>

            <TableCell align="right"> תמונה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.adminorderid}</TableCell>
              <TableCell align="right">{row.type}</TableCell>

              <TableCell align="right">{row.productname}</TableCell>

              <TableCell align="right" component="th" scope="row">
                {row.productid}
              </TableCell>
              <TableCell align="right">{row.employeename}</TableCell>
              <TableCell align="right">{row.price}שח</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.providername}</TableCell>

              

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
