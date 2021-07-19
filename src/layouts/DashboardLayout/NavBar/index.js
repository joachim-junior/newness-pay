import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  // Button,
  Drawer,
  Hidden,
  List,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Book as DocumentationIcon,
  Settings as SettingsIcon,
  Repeat as BillingIcon,
  CheckCircle as ComplianceIcon,
  PlusSquare as PlusSquareIcon,
  ChevronDown as DownIcon,
  CreditCard as PaymentIcon,
  Package as ProductsIcon,
  Users as CustomersIcon
} from 'react-feather';
import NavItem from './NavItem';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const user = {
  avatar: 'static/images/not_found.png',
  jobTitle: 'Senior Developer',
  name: 'Joachim Junior'
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 70,
    borderRight: '1px solid #eaebec',
    backgroundColor: '#fbfbfb',
    marginTop: -80
  },
  avatar: {
    cursor: 'pointer',
    width: 40,
    height: 40
  },
  name: {
    fontSize: 16
  },
  itemlist: {
    marginBottom: '-15px !important',
    marginLeft: '5px'
  },
  itemlistfirst: {
    marginBottom: '-15px !important',
    marginLeft: '5px',
    marginTop: '-10px'
  },
  itemlistlast: {
    marginLeft: '5px',
    marginBottom: '0px !important'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={2}>
        <Box
          className={classes.usernameBox}
          display="flex"
          flexDirection="row"
          p={2}
        >
          <PlusSquareIcon size="26" color="#fff" fill="rgb(0 62 236)" />
          <Typography className={classes.name} color="textPrimary" variant="h6">
            {user.name}
          </Typography>
          <DownIcon size="26" color="#9d9ca0" />
        </Box>
        <List>
          <NavItem
            href="/app/dashboard"
            title="Dashboard"
            icon={BarChartIcon}
          />
          <NavItem
            href="/app/activate"
            title="Activate your account"
            icon={ComplianceIcon}
          />
          <Divider style={{ margin: '20px 70px 10px 40px' }} />
          <NavItem href="/app/payouts" title="Payments" icon={PaymentIcon} />
          <ListItem className={classes.itemlist}>
            <NavItem
              className={classes.itemlistfirst}
              href="/app/transactions"
              title="Transactions"
            />
          </ListItem>
          <ListItem className={classes.itemlist}>
            <NavItem
              className={classes.itemlist}
              href="/app/topups"
              title="Top-ups"
            />
          </ListItem>
          <ListItem className={classes.itemlist}>
            <NavItem
              className={classes.itemlist}
              href="/app/payouts"
              title="Payouts"
            />
          </ListItem>
          <ListItem className={classes.itemlist}>
            <NavItem
              className={classes.itemlist}
              href="/app/disputes"
              title="Disputes"
            />
          </ListItem>
          <ListItem className={classes.itemlist}>
            <NavItem
              className={classes.itemlistlast}
              href="/app/transfers"
              title="Transfers"
            />
          </ListItem>
          <NavItem
            href="/app/customers"
            title="Customers"
            icon={CustomersIcon}
          />
          <NavItem href="/app/balances" title="Balances" icon={BillingIcon} />
          <Divider style={{ margin: '20px 70px 10px 40px' }} />
          <NavItem href="/app/products" title="Products" icon={ProductsIcon} />
          <NavItem href="/app/settings" title="Settings" icon={SettingsIcon} />
          <NavItem
            href="/app/"
            title="Documentation"
            icon={DocumentationIcon}
          />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
