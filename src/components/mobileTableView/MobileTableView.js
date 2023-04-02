import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead } from "@mui/material";

const MobileTableView = ({
  StyledTableCell,
  handleChangeRowsPerPage,
  handleChangePage,
  rowsPerPage,
  TablePaginationActions,
  filterData,
  page,
}) => {
  return (
    <div className="mobile-view">
      <TableContainer component={Paper}>
        <Table className="table-mobile" sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow className="table-row">
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {(rowsPerPage > 0
              ? filterData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filterData
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <div className="table-heading">NAME</div>
                  {row.Name}
                </TableCell>
                <TableCell style={{ width: 160 }}>
                  <div className="table-heading">POSITION</div>
                  {row.Position}
                </TableCell>
                <TableCell style={{ width: 160 }}>
                  <div className="table-heading">OFFICE</div>
                  {row.Office}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={filterData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileTableView;
