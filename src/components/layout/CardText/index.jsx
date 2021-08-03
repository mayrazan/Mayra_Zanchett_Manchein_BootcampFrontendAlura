import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const CardText = ({ text }) => (
  <Text tag="p" margin="0">
    {text}
  </Text>
);

export default CardText;

CardText.propTypes = {
  text: PropTypes.string.isRequired,
};
