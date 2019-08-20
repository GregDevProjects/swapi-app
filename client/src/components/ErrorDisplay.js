/* eslint-disable no-shadow */

import React from 'react';

import {
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const ErrorDisplay = (props) => {
  const { errorCode } = props;

  const getPrimaryErrorText = (errorCode) => {
    if (errorCode === 503) {
      return 'SWAPI is unavailable';
    }
    if (errorCode === 404) {
      return 'SWAPI couldn\'t find that ID';
    }
    return 'There was a problem with the server';
  };

  const getSecondaryErrorText = (errorCode) => {
    if (errorCode === 503) {
      return 'Looks like SWAPI isn\'t responding right now, try again in a few minutes';
    }
    if (errorCode === 404) {
      return 'Try searching for a different id!';
    }
    return '';
  };

  return (
    <>
      <Typography gutterBottom align="center" variant="h4" color="error">
        {getPrimaryErrorText(errorCode)}
      </Typography>
      <Typography align="center" variant="h5">
        {getSecondaryErrorText(errorCode)}
      </Typography>
    </>
  );
};

ErrorDisplay.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default ErrorDisplay;
