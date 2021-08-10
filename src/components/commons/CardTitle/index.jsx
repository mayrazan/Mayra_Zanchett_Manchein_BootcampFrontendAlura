import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const CardTitle = ({ text }) => (
  <Text
    tag="h5"
    variant={{ xs: 'titleProjectSM', md: 'projectTitle' }}
    margin="0"
  >
    {text}
  </Text>
);

export default CardTitle;

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
