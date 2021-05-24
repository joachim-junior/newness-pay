import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Languages from './Languages';
import ProfileDetails from './ProfileDetails';
import Divider from '@material-ui/core/Divider';
import Authentication from './Authentication';
import Preferences from './Preferences';
import Password from './Password';
import Team from './Team';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails />
            <Divider style={{ margin: '20px 0px' }} />
            <Password />
            <Divider style={{ margin: '20px 0px' }} />
            <Languages />
            <Divider style={{ margin: '20px 0px' }} />
            <Authentication />
            <Divider style={{ margin: '20px 0px' }} />
            <Preferences />
            <Divider style={{ margin: '20px 0px' }} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={10} md={6} xs={12}>
            <Team />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Settings;
