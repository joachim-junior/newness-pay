import React from 'react';
import Page from 'src/components/Page';
import NoResults from 'src/components/NoResults';
import { Container, Typography, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fields: {
    display: 'inline-block',
    margin: 5
  }
});

export const BalancesListView = () => {
  const classes = useStyles();
  return (
    <Page title="Balances">
      <Container maxWidth={false}>
        <br />
        <Typography variant="h3">Balances</Typography>
        <br />
        <Typography variant="h5" style={{ marginBottom: 5 }}>
          XAF Balance
        </Typography>
        <Divider />
        <Box>
          <Typography className={classes.fields}>Potential returns</Typography>
          <Typography className={classes.fields} style={{ float: 'right' }}>
            0.00 XAF
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.fields}>Funds on hold</Typography>
          <Typography
            className={classes.fields}
            pull-right
            style={{ float: 'right' }}
          >
            0.00 XAF
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="h5" className={classes.fields}>
            Total
          </Typography>
          <Typography
            variant="h5"
            className={classes.fields}
            style={{ float: 'right' }}
          >
            0.00 XAF
          </Typography>
        </Box>
        <NoResults title="Balances" />
      </Container>
    </Page>
  );
};
