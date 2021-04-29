import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: 20
  },
  username: {
    fontFamily: ['Mulish', 'sans-serif'].join(','),
    fontSize: 28,
    fontWeight: 700,
    color: '#1a1f36'
  }
});

const userdata = {
  username: 'Joachim'
};
const Welcome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} m={3}>
      <Typography className={classes.username}>
        {'Get started with Fapshi, '} {userdata.username}
      </Typography>
    </Box>
  );
};

export default Welcome;
