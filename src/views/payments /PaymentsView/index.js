import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

const PaymentsView = () => {
  return (
    <Page title="Payments">
      <Container maxWidth={false}>
        <NoResults title="Payments" />
      </Container>
    </Page>
  );
};

export default PaymentsView;
