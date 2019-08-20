/* eslint-disable react/no-array-index-key */
import React from 'react';

import PropTypes from 'prop-types';
import {
  List, Typography,
} from '@material-ui/core';

import CharacterListItem from './CharacterListItem';

const starWarsCharacterDisplay = (props) => {
  const { starWarsCharacter } = props;

  return (
    <>
      <Typography variant="h6">Personal Attributes</Typography>
      <List>
        <CharacterListItem primary="Height" secondary={`${starWarsCharacter.height} centimeters`} />
        <CharacterListItem primary="Mass" secondary={`${starWarsCharacter.mass} kilograms`} />
        <CharacterListItem primary="Hair Color" secondary={starWarsCharacter.hairColor} />
        <CharacterListItem primary="Skin Color" secondary={starWarsCharacter.skinColor} />
        <CharacterListItem primary="Gender" secondary={starWarsCharacter.gender} />
        <CharacterListItem primary="Birth Year" secondary={starWarsCharacter.birthYear} />
      </List>
      <Typography variant="h6">Home Planet</Typography>
      <List>
        <CharacterListItem primary="Title" secondary={starWarsCharacter.homePlanet.title} />
        <CharacterListItem primary="Title" secondary={starWarsCharacter.homePlanet.title} />
        <CharacterListItem primary="Terrain" secondary={starWarsCharacter.homePlanet.terrain} />
        <CharacterListItem primary="Population" secondary={starWarsCharacter.homePlanet.population} />
      </List>
      <Typography variant="h6">Species</Typography>
      <List>
        {starWarsCharacter.species.map((species, i) => (
          <div key={i}>
            <Typography>{species.name}</Typography>
            <CharacterListItem primary="Name" secondary={species.name} />
            <CharacterListItem primary="Average LifeSpan" secondary={species.averageLifespan} />
            <CharacterListItem primary="Classification" secondary={species.classification} />
            <CharacterListItem primary="Language" secondary={species.language} />
          </div>
        ))}
      </List>
      <List>
        <Typography variant="h6">Films</Typography>
        {starWarsCharacter.films.map((film, i) => (
          <div key={i}>
            <Typography>{film.title}</Typography>
            <CharacterListItem primary="Director" secondary={film.director} />
            <CharacterListItem primary="Producers" secondary={film.producers} />
            <CharacterListItem primary="Date" secondary={film.date} />
          </div>
        ))}
      </List>
    </>
  );
};

starWarsCharacterDisplay.propTypes = {
  starWarsCharacter: PropTypes.shape({
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
        producers: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default starWarsCharacterDisplay;
