import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

const CustomersView = () => {
  return (
    <Page title="Customers">
      <Container maxWidth={false}>
        <NoResults title="Customers" />
      </Container>
    </Page>
  );
};

export default CustomersView;
