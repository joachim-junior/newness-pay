import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

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

const Languages = () => {
  const [language, setLanguage] = React.useState('');
  const classes = useStyles();

  const handleChange = event => {
    setLanguage(event.target.value);
  };
  return (
    <Container className={classes.container}>
      <Typography className={classes.introtitle}>Language</Typography>
      <Typography>
        Please select a preferred language for your Dashboard, including date,
        time, and number formatting.
      </Typography>
      <Divider style={{ margin: '20px 0px' }} />
      <FormControl variant="outlined" className={classes.container}>
        <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
        <Select
          className={classes.inputfield}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={language}
          onChange={handleChange}
          palceholder="Select language"
          label="language"
        >
          <MenuItem value={20}>English</MenuItem>
          <MenuItem value={30}>French</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default Languages;
