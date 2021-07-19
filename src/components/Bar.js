import Typography from '@material-ui/core/Typography';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    width: '100%'
  },
  introtitle: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 26,
    fontWeight: 700,
    color: '#1a1f36',
    display: 'inline-block'
  },
  inputfield: {
    width: '100%'
  },
  root: {
    width: '100%',
    margin: '50px 0px'
  },
  items: {
    display: 'inline-block'
  },
  button: {
    float: 'right',
    textTransform: 'none',
    fontSize: 14
  }
});

const Bar = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.introtitle}>{props.title}</Typography>
      <Button
        variant="contained"
        color="secondary"
        className={(classes.items, classes.Button, classes.button)}
        endIcon={<AddIcon />}
        size="small"
        onClick={props.onClick}
      >
        {props.button}
      </Button>
      <Button
        variant="contained"
        color="default"
        className={(classes.items, classes.Button, classes.button)}
        endIcon={<ImportExportIcon />}
        size="small"
        style={{ marginRight: 10 }}
      >
        {' '}
        Export
      </Button>
    </Box>
  );
};

export default Bar;
