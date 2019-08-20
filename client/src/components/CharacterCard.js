import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CharacterCard = (props) => {
  const classes = useStyles();
  const {
    name, description, image, onCardClick, swapiId,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => onCardClick(swapiId)}>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  onCardClick: PropTypes.func.isRequired,
  swapiId: PropTypes.number.isRequired,
};

export default CharacterCard;
