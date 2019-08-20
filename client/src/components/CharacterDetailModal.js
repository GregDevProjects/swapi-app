import React from 'react';

import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import StarWarsCharacterDisplay from './StarWarsCharacterDisplay';
import ErrorDisplay from './ErrorDisplay';

const CharacterDetailModal = (props) => {
  const {
    open, onClose, starWarsCharacter, errorCode,
  } = props;

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={onClose}
      >
        <DialogTitle>{starWarsCharacter ? starWarsCharacter.name : ''}</DialogTitle>
        <DialogContent>
          {errorCode && (
            <ErrorDisplay errorCode={errorCode} />
          )}
          {starWarsCharacter && (
            <StarWarsCharacterDisplay starWarsCharacter={starWarsCharacter} />
          )}
          {!starWarsCharacter && !errorCode && (
            <Grid container justify="center">
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CharacterDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  starWarsCharacter: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  errorCode: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
};


export default CharacterDetailModal;
