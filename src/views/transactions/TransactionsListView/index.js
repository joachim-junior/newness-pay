import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';
import ExportBar from 'src/components/ExportBar';
import TableData from './Table';

const TransactionsListView = () => {
  return (
    <Page title="Balances">
      <Container maxWidth={false}>
        <ExportBar title="All transactions" />
        <TableData />
        <NoResults title="Tansactions" />
      </Container>
    </Page>
  );
};

export default TransactionsListView;
