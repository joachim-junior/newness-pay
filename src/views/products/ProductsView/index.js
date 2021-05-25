import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';
import ProductsBar from './ProductsBar';
import Alerts from './Alerts';
import { makeStyles } from '@material-ui/core/styles';
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
  },
  root: {
    width: '90%',
    margin: 20
  }
});

const ProductsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.introtitle} title="Products">
      <Container className={classes.root}>
        <Alerts />
        <Divider style={{ margin: '20px 0px' }} />
        <ProductsBar />
        <NoResults title="Products" />
      </Container>
    </Page>
  );
};

export default ProductsView;
