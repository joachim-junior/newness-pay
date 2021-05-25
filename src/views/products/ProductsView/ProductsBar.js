import Typography from '@material-ui/core/Typography';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
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

const ProductsBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.introtitle}>Products</Typography>
      <Button
        variant="contained"
        color="secondary"
        className={(classes.items, classes.Button, classes.button)}
        startIcon={<AddIcon />}
        size="small"
      >
        Add product
      </Button>
    </Box>
  );
};

export default ProductsBar;
