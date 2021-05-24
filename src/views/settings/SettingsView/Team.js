import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, TextField, Box } from '@material-ui/core';
import {
  PlusCircle as AddTeamIcon,
  ArrowRightCircle as RolesIcon
} from 'react-feather';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  introtitle: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 22,
    fontWeight: 600,
    color: '#1a1f36'
  }
});

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

export default function DenseTable() {
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      <Typography className={classes.introtitle}>Team</Typography>
      <Grid container lg={12} spacing={3}>
        <Grid item md={12} xs={12}>
          <Box display="flex" mb={2}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
                size="small"
                style={{ marginBottom: 10 }}
              >
                <option value="administrator">Administrator</option>
              </TextField>
            </Grid>
            <Box style={{ marginLeft: 100 }}>
              <Button
                variant="outlined"
                startIcon={<AddTeamIcon />}
                color="primary"
                size="small"
                m={5}
                style={{ marginRight: 7 }}
              >
                New member
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<RolesIcon />}
                m={5}
              >
                Manage roles
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
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
}
