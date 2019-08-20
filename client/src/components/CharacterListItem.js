
import React from 'react';

import {
  ListItem, ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const CharacterListItem = (props) => {
  const { primary, secondary } = props;

  return (
    <ListItem>
      <ListItemText
        primary={primary}
        secondary={secondary}
      />
    </ListItem>
  );
};

CharacterListItem.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CharacterListItem;
