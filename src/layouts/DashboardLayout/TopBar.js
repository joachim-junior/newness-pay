import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavItem from 'src/layouts/DashboardLayout/NavBar/NavItem.js';
import Divider from '@material-ui/core/Divider';
import {
  UserCheck as ProfileIcon,
  Settings as SettingsIcon,
  LogOut as LogoutIcon
} from 'react-feather';

import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  HelpCircle as HelpIcon,
  Bell as NotificationIcon,
  User as UserIcon
} from 'react-feather';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    borderBottom: 'solid 1px rgba(0,0,0,.05)'
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    right: '42%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9e9fa5'
  },
  inputRoot: {
    color: '#4d4d4e'
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <Box flexGrow={1} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon color="#9e9fa5" />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Hidden mdDown>
          <Typography style={{ color: 'rgb(70 70 70)', fontWeight: 700 }}>
            View test data
          </Typography>
          <Switch checked="" onChange="" name="jason" />
          <IconButton color="#9e9fa5">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationIcon size="20" fill="#9e9fa5" color="#9e9fa5" />
            </Badge>
          </IconButton>
          <IconButton>
            <HelpIcon size="24" fill="#9e9fa5" color="#fff" />
          </IconButton>
          <IconButton onClick={handleClick}>
            <UserIcon size="20" fill="#9e9fa5" color="#9e9fa5" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled>Joachim Junior</MenuItem>
            <MenuItem disabled>Administrator</MenuItem>
            <Divider />
            <MenuItem>
              <NavItem href="/app/account" title="Profile" icon={ProfileIcon} />
            </MenuItem>
            <MenuItem>
              <NavItem
                href="/app/settings"
                title="Settings"
                icon={SettingsIcon}
              />
            </MenuItem>
            <MenuItem>
              <NavItem href="/app/logout" title="Logout" icon={LogoutIcon} />
            </MenuItem>
          </Menu>
        </Hidden>
        <Hidden lgUp>
          <IconButton onClick={onMobileNavOpen}>
            <MenuIcon size="20" fill="#9e9fa5" color="#9e9fa5" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
