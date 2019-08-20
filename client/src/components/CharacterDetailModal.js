import React from 'react';

import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const CharacterDetailModal = (props) => {
  const { open, onClose, starWarsCharacterData } = props;

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={onClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <div>
            {starWarsCharacterData && (
            <>
              <div>{starWarsCharacterData.name}</div>
              <div>{starWarsCharacterData.height}</div>
              <div>{starWarsCharacterData.mass}</div>
              <div>{starWarsCharacterData.hairColor}</div>
              <div>{starWarsCharacterData.skinColor}</div>
              <div>{starWarsCharacterData.gender}</div>
              <div>{starWarsCharacterData.birthYear}</div>
              <h3>homePlanet</h3>
              <div>{starWarsCharacterData.homePlanet.title}</div>
              <div>{starWarsCharacterData.homePlanet.terrain}</div>
              <div>{starWarsCharacterData.homePlanet.population}</div>
              <h3>species</h3>
              {starWarsCharacterData.species.map((species) => (
                <div key={species.name}>
                  <div>{species.name}</div>
                  <div>{species.averageLifespan}</div>
                  <div>{species.classification}</div>
                  <div>{species.language}</div>
                </div>
              ))}
              <h3>films</h3>
              {starWarsCharacterData.films.map((film) => (
                <div key={film.title}>
                  <div>{film.title}</div>
                  <div>{film.director}</div>
                  <div>{film.producers}</div>
                  <div>{film.date}</div>
                </div>
              ))}
            </>
            )}

          </div>
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
  starWarsCharacterData: PropTypes.oneOfType([PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    mass: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    hairColor: PropTypes.string.isRequired,
    skinColor: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
    homePlanet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      population: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }).isRequired,
    species: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        averageLifespan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        classification: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
      }),
    ).isRequired,
    films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        producers: PropTypes.array.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }), PropTypes.bool]).isRequired,
};


export default CharacterDetailModal;
