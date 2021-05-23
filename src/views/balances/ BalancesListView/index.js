import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

export const BalancesListView = () => {
  return (
    <Page title="Balances">
      <Container maxWidth={false}>
        <NoResults title="Balances" />
      </Container>
    </Page>
  );
};
