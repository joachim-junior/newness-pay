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
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    fontSize: 20,
    fontWeight: 500,
    color: '#1a1f36'
  },
  introtext: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 16
  }
});
const emails = ['username@gmail.com', 'user02@gmail.com'];

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

export default function Team() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

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
                onClick={handleClickOpen}
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
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
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

Team.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Container>
        <Box style={{ margin: 10 }}>
          <Typography className={classes.introtitle}>
            Invite new users
          </Typography>
          <Typography className={classes.introtext}>
            Enter the email addresses of the users you'd like to invite, and
            choose the role they should have.
          </Typography>
        </Box>
        <Divider style={{ margin: '20px 0px' }} />
        <TextField
          placeholder="sarah@fapshi.com, okorie@example.com"
          fullWidth
          name="state"
          required
          variant="outlined"
          size="small"
          style={{ marginBottom: 10 }}
        ></TextField>
        <Divider style={{ margin: '20px 0px' }} />
        <form>
          <FormControl component="fieldset">
            <FormLabel component="legend">Member roles</FormLabel>
            <Divider style={{ margin: '10px 0px' }} />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="administrator"
                control={<Radio />}
                label="Administrator"
              />
              <Typography style={{ fontSize: '14px' }}>
                Best for business owners and company administrators
              </Typography>
              <Divider style={{ margin: '10px 0px' }} />
              <FormControlLabel
                value="developer"
                control={<Radio />}
                label="Developer"
              />
              <Typography style={{ fontSize: '14px' }}>
                Best for developers or people primarily using the Stripe API
              </Typography>
              <Divider style={{ margin: '10px 0px' }} />
              <FormControlLabel
                value="viewer"
                control={<Radio />}
                label="Viewer"
              />
              <Typography style={{ fontSize: '14px' }}>
                Best for people who need to view Stripe data, but don't need to
                make any updates
              </Typography>
              <Divider style={{ margin: '10px 0px' }} />
              <FormControlLabel
                value="support"
                control={<Radio />}
                label="Support Specialist"
              />
              <Typography style={{ fontSize: '14px' }}>
                Best for employees who regularly refund payments and respond to
                disputes
              </Typography>
              <Divider style={{ margin: '10px 0px' }} />
              <FormControlLabel
                value="payment"
                control={<Radio />}
                label="Payment Specialist"
              />
              <Typography style={{ fontSize: '14px' }}>
                Best for people responsible for managing payement, including
                payouts and top ups
              </Typography>
            </RadioGroup>
          </FormControl>
          <Divider style={{ margin: '10px 0px' }} />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              color="primary"
              style={{ marginRight: 5 }}
              variant="contained"
              type="reset"
              size="small"
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
            >
              Invite
            </Button>
          </Box>
        </form>
      </Container>
    </Dialog>
  );
}
