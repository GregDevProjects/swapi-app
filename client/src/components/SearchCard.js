import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, CardMedia, TextField, Button,
} from '@material-ui/core/';
import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';

import Find from '../images/find.png';

const useStyles = makeStyles({
  card: {
    maxWidth: '345px',
    height: '271px',
  },
  media: {
    height: 140,
  },
  button: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
  },
  header: {
    backgroundColor: blue[400],
    height: '103px',
    width: '345px',
  },
});

const SearchCard = (props) => {
  const classes = useStyles();
  const { onSearch } = props;
  const textInput = React.createRef();
  const [valid, setValid] = useState(false);
  const validate = (event) => {
    const input = event.target.value;
    if (Number.isNaN(input) || input < 1) {
      setValid(false);
      return;
    }
    setValid(true);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={Find}
        title="search"
      />
      <CardContent>
        <TextField
          label="SWAPI ID"
          type="number"
          inputProps={{ min: '1' }}
          className={classes.input}
          inputRef={textInput}
          onChange={validate}
        />
        <Button disabled={!valid} className={classes.button} variant="contained" color="primary" onClick={() => onSearch(textInput.current.value)}>
        Search by id
        </Button>
      </CardContent>
    </Card>
  );
};

SearchCard.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchCard;
