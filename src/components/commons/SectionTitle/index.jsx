/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const SectionTitle = ({ text, ...props }) => (
  <Text
    tag="h4"
    variant={{ xs: 'titleProjectSection', md: 'title2' }}
    margin="0"
    {...props}
  >
    {text}
  </Text>
);

export default SectionTitle;

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
