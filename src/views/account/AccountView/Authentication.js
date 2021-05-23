import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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

const Authentication = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.introtitle}>
        Two-step authentication
      </Typography>
      <Typography>
        Keep your account extra secure with a second authentication step.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        size="small"
        style={{ marginTop: '10px' }}
      >
        Add two-step authentication
      </Button>
      <Divider style={{ margin: '10px 0px' }} />
      <Typography>
        Once you enable either SMS or Email, you'll be able to add security
        keys.
      </Typography>
    </Container>
  );
};

export default Authentication;
