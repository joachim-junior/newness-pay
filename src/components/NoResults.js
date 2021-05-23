import React from 'react';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textOne: {
    color: '#161c1f',
    fontSize: 22,
    fontWeight: 600
  },
  textTwo: {
    color: '#546e7a',
    fontSize: 14
  },
  icon: {
    fontSize: 55,
    color: '#546e7a'
  },
  container: {
    marginTop: '25%',
    textAlign: 'center'
  }
});

const NoResults = props => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <LibraryBooksIcon className={classes.icon} size="20" />
      <Typography className={classes.textOne}>No {props.title}</Typography>
      <Typography className={classes.textTwo}>
        There're no plans for this query. Please try another query or clear your
        filters.
      </Typography>
    </Container>
  );
};

export default NoResults;
