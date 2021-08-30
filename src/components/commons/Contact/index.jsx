import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../layout/Box';
import ButtonLink from '../ButtonLink';
import Text from '../../foundation/Text';

const Contact = ({ onClick }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    padding="30px 0"
    id="Contact"
  >
    <Text
      variant={{ xs: 'contactTitle', md: 'titleProjectSection' }}
      tag="h5"
      margin="0"
    >
      Entre em contato
    </Text>
    <ButtonLink
      as="button"
      onClick={onClick}
      direction="right"
      text="+"
      font
      aria-label="Entre em contato"
    />
  </Box>
);

export default Contact;

Contact.propTypes = {
  onClick: PropTypes.func.isRequired,
};
