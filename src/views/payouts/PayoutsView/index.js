import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

const PayoutsView = () => {
  return (
    <Page title="Payouts">
      <Container maxWidth={false}>
        <NoResults title="Payouts" />
      </Container>
    </Page>
  );
};

export default PayoutsView;
