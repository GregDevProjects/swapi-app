import React, { useState } from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';

import SwapiAppBar from './SwapiAppBar';
import CharacterCard from './CharacterCard';
import SearchCard from './SearchCard';
import CharacterDetailModal from './CharacterDetailModal';

import Luke from '../images/luke.png';
import C3PO from '../images/3po.png';
import R2D2 from '../images/r2d2.png';
import DarthVader from '../images/darth.png';
import Leia from '../images/leia.png';

const useStyles = makeStyles({
  title: {
    padding: '15px 0',
  },
  footer: {
    marginTop: '50px',
    fontStyle: 'italic',
  },
});

function App() {
  const [starWarsCharacter, setStarWarsCharacter] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const getStarWarsCharacter = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}star-wars-characters/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 404) {
          setErrorCode(404);
          return false;
        }
        if (res.status === 503) {
          setErrorCode(503);
          return false;
        }
        setErrorCode(500);
        return false;
      })
      .then(
        (result) => {
          setStarWarsCharacter(result);
        },
        () => {
          setErrorCode(500);
        },
      );
  };

  const handleCardClick = (swapiId) => {
    getStarWarsCharacter(swapiId);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setStarWarsCharacter(false);
    setErrorCode(false);
  };

  return (
    <>
      <SwapiAppBar />
      <CharacterDetailModal
        onClose={handleModalClose}
        open={modalOpen}
        starWarsCharacter={starWarsCharacter}
        errorCode={errorCode}
      />
      <div className={classes.title}>
        <Typography gutterBottom align="center" variant="h3">Star Picker</Typography>
        <Typography align="center">A showcase of Star Wars characters. Select or search for a character to see more information.</Typography>
      </div>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <CharacterCard swapiId={1} onCardClick={handleCardClick} image={Luke} name="Luke SkyWalker" description="A Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known" />
        </Grid>
        <Grid item>
          <CharacterCard swapiId={2} onCardClick={handleCardClick} image={C3PO} name="C-3PO" description="A droid programmed for etiquette and protocol, built by the heroic Jedi Anakin Skywalker, and a constant companion to astromech R2-D2." />
        </Grid>
        <Grid item>
          <CharacterCard swapiId={3} onCardClick={handleCardClick} image={R2D2} name="R2-D2" description="An astromech droid, a type of robot that usually served as a mechanic and backup computer for small spaceships." />
        </Grid>
        <Grid item>
          <CharacterCard swapiId={4} onCardClick={handleCardClick} image={DarthVader} name="Darth Vader" description="Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force and became a Sith Lord." />
        </Grid>
        <Grid item>
          <CharacterCard swapiId={5} onCardClick={handleCardClick} image={Leia} name="Leia" description="Leia Organa was one of the Rebel Alliance's greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire." />
        </Grid>
        <Grid item>
          <SearchCard onSearch={handleCardClick} />
        </Grid>
      </Grid>
      <Typography align="center" className={classes.footer}>
          Powered by
        {' '}
        <a href="https://swapi.co/" target="_blank" rel="noopener noreferrer">SWAPI</a>
      </Typography>
    </>
  );
}

export default App;
