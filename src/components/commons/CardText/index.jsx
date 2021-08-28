/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const CardText = ({ text, ...props }) => (
  <Text tag="p" margin="0" {...props}>
    {text}
  </Text>
);

export default CardText;

CardText.propTypes = {
  text: PropTypes.string.isRequired,
};
