import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

const ProductsView = () => {
  return (
    <Page title="Products">
      <Container maxWidth={false}>
        <NoResults title="Products" />
      </Container>
    </Page>
  );
};

export default ProductsView;
