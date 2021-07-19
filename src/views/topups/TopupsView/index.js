import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Page from 'src/components/Page';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import NoResults from 'src/components/NoResults';
import { Container, Typography } from '@material-ui/core';
import Bar from 'src/components/Bar';
import TableData from './Table';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const TopupsView = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  const [values, setValues] = React.useState({
    amount: '',
    phone: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleValuesChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page title="Top-ups">
      <Container maxWidth={false}>
        <Bar
          title="Top-ups"
          button="Create a top-up"
          onClick={handleClickOpen}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Top-up your account</DialogTitle>
          <DialogContent>
            <FormControl className={classes.margin}>
              <Typography>Select a payment method</Typography>
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                style={{ width: 510 }}
              >
                <option value="momo">MTN Mobile Money</option>
                <option value="orange">Orange Money</option>
                <option value="card">Credit Card</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={values.amount}
                onChange={handleValuesChange('amount')}
                startAdornment={
                  <InputAdornment position="start">XAF</InputAdornment>
                }
                labelWidth={60}
                size="small"
              />
            </FormControl>
            <FormControl className={classes.margin} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone"
                value={values.phone}
                onChange={handleValuesChange('phone')}
                labelWidth={60}
                size="small"
                placeholder="Ex: 676211496"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <TableData />
        <NoResults title="Top-ups" />
      </Container>
    </Page>
  );
};

export default TopupsView;
