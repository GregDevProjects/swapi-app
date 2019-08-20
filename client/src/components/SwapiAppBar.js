import React from 'react';

import {
  makeStyles, AppBar, Toolbar, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const SwapiAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Star Picker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SwapiAppBar;
