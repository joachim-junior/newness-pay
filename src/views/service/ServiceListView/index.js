import React from 'react';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';

const ServiceList = () => {
  return (
    <Page title="Services">
      <Container maxWidth={false}>
        <NoResults title="Services" />
      </Container>
    </Page>
  );
};

export default ServiceList;
