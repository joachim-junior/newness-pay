import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  introtitle: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 20,
    fontWeight: 500,
    color: '#1a1f36'
  },
  introtext: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 16
  }
});

// const emails = ['username@gmail.com', 'user02@gmail.com'];

function createData(firstname, lastname, address, role, twostep, date) {
  return { firstname, lastname, address, role, twostep, date };
}

const rows = [
  createData(
    'Joachim',
    ' Junior',
    'joachimjunior5@gmail.com',
    'Administrator',
    'Enabled',
    'Date registered'
  ),
  createData(
    'Karl',
    'Tamo',
    'joachimjunior5@gmail.com',
    'Administrator',
    'Enabled',
    'Date registered'
  )
];

const TableData = () => {
  const classes = useStyles();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="right">Two step</TableCell>
              <TableCell align="right">Date Registered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.firstname}>
                <TableCell component="th" scope="row">
                  {row.firstname} {row.lastname}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.twostep}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableData;
