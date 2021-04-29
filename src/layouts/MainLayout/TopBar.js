import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64
  }
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    ></AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
