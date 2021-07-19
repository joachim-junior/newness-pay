import React from 'react';
import Page from 'src/components/Page';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddProductForm from './AddProductForm';

const useStyles = makeStyles({
  introtitle: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 22,
    fontWeight: 600,
    color: '#1a1f36'
  },
  inputfield: {
    width: '100%'
  },
  root: {
    width: '97%',
    margin: '0px 0px 20px 20px'
  }
});

const AddProduct = () => {
  const classes = useStyles();

  return (
    <Page className={classes.introtitle} title="Products">
      <Box className={classes.root}>
        <AddProductForm />
      </Box>
    </Page>
  );
};

export default AddProduct;
