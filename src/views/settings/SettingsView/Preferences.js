import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%'
  },
  introtitle: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 22,
    fontWeight: 600,
    color: '#1a1f36'
  },
  inputfield: {
    width: '100%'
  }
});

const Preferences = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true
  });

  const classes = useStyles();

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <FormControl component="fieldset">
        <FormLabel className={classes.introtitle} component="legend">
          Email Preferences
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Successful payments"
          />
          <FormHelperText>
            Receive a notification for every succesful payment.
          </FormHelperText>
          <FormControlLabel
            control={
              <Switch
                checked={state.jason}
                onChange={handleChange}
                name="jason"
              />
            }
            label="Payouts"
          />
          <FormHelperText>
            Receive a notification for every initiated payout.
          </FormHelperText>
          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Mentions"
          />
          <FormHelperText>
            Receive a notification if a teammate mentions you in a note.
          </FormHelperText>
          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Disputes"
          />
          <FormHelperText>
            Receive a notification if a payment is disputed by a customer and
            for dispute resolutions.
          </FormHelperText>
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default Preferences;
