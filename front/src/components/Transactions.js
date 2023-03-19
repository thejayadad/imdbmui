import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



const Transactions = () => {
  return (
    <>
    <TableContainer sx={{borderRadius: 0}} component={Paper}>
    <Table sx={{ maxWidth: 700,  }} aria-label="customized table">
    <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Amount</StyledTableCell>
            <StyledTableCell >Type</StyledTableCell>
            <StyledTableCell >Category</StyledTableCell>
            <StyledTableCell>Reference</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Date
              </StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell >Type</StyledTableCell>
              <StyledTableCell >Category</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Date
              </StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell >Type</StyledTableCell>
              <StyledTableCell >Category</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Date
              </StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell >Type</StyledTableCell>
              <StyledTableCell >Category</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Date
              </StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell >Type</StyledTableCell>
              <StyledTableCell >Category</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
    </TableBody>
    </Table>
    </TableContainer>

  </>
  )
}

export default Transactions