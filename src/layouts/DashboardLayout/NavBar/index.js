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
  TrendingUp as TransactionsIcon,
  Settings as SettingsIcon,
  DollarSign as BillingIcon,
  User as UserIcon,
  Users as UsersIcon,
  Activity as ServiceIcon,
  CheckCircle as ComplianceIcon,
  PlusSquare as PlusSquareIcon,
  ChevronDown as DownIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: 'static/images/not_found.png',
  jobTitle: 'Senior Developer',
  name: 'Joachim Junior'
};
const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/activate',
    icon: ComplianceIcon,
    title: 'Activate Your Account'
  },
  {
    href: '/app/services',
    icon: ServiceIcon,
    title: 'Services'
  },
  {
    href: '/app/transactions',
    icon: TransactionsIcon,
    title: 'Transactions'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Profile'
  },
  {
    href: '/app/account',
    icon: UsersIcon,
    title: 'Users'
  },
  {
    href: '/app/balances',
    icon: BillingIcon,
    title: 'Balances'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/app/documentation',
    icon: DocumentationIcon,
    title: 'Documentation'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
    borderRight: '1px solid #eaebec',
    backgroundColor: '#fdfdff',
    marginTop: -80
  },
  avatar: {
    cursor: 'pointer',
    width: 40,
    height: 40
  },
  name: {
    fontSize: 18
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
          <PlusSquareIcon size="28" color="#fff" fill="rgb(0 62 236)" />
          <Typography className={classes.name} color="textPrimary" variant="h6">
            {user.name}
          </Typography>
          <DownIcon size="28" color="#9d9ca0" />
        </Box>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
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
