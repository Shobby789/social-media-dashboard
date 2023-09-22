import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Name", "Muhammad Shoaib", "Edit"),
  createData("Username", "You have not set a username", "Edit"),
  createData("Contact", "Primary: (Pending)", "Edit"),
  createData("Ad account contact", "", "Edit"),
  createData(
    "Memorialisation settings",
    "Decide what happens to your accounts after you pass away",
    "Edit"
  ),
  createData(
    "Identity confirmation",
    "Confirm your identity to do things",
    "Edit"
  ),
  createData(
    "Managing your information",
    "Learn more about how you can manage your information",
    "View"
  ),
  createData(
    "Access your information",
    "View you information by category",
    "View"
  ),
];

export default function SettingsTable() {
  return (
    <TableContainer component={""}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: "600", fontSize: "16px" }}
              >
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">
                <Link to="/edit">{row.fat}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
