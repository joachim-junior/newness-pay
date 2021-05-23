import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container } from '@material-ui/core';

const DisputesView = () => {
  return (
    <Page title="Disputes">
      <Container maxWidth={false}>
        <NoResults title="Disputes" />
      </Container>
    </Page>
  );
};

export default DisputesView;
