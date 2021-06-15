import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { flexbox } from "@material-ui/system";

const columns = [
  { id: "name", label: "Name", minWidth: "150px" },
  { id: "unitCM", label: "Centimeters" },
  {
    id: "unitInches",
    label: "Inches",
    align: "right",
  },
];

function createData(name, unitCM, unitInches) {
  return { name, unitCM, unitInches };
}

const rows = [
  createData("A5", "14.8 x 21", "8.3 x 11.7"),
  createData("A4", "21 x 29.7", "8.3 x 11.7"),
  createData("A3", "26.7 x 42", "11.7 x 16.5"),
  createData("A2", "42 x 59.4", "16.5 x 23.4"),
  createData("A1", "59.4 x 84.1", "23.4 x 33.1"),
  createData("A0", "84.1 x 118.9", "33.1 x 46.8"),
];

const useStyles = makeStyles((theme)=>({
  root: {
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    maxHeight: 440,
  },
}));

const PaperSizesA = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography flexGrow={1} edge="start" variant="h6" className={classes.title}>
            A Sizes
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PaperSizesA;
