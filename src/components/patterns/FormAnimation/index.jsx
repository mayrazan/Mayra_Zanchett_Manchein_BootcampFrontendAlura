import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../layout/Box';

const FormAnimation = ({ animation }) => (
  <Box display="flex" justifyContent="center">
    <Lottie
      width="150px"
      height="150px"
      config={{
        animationData: animation,
        loop: true,
        autoplay: true,
      }}
    />
  </Box>
);

export default FormAnimation;

FormAnimation.propTypes = {
  animation: PropTypes.shape({}).isRequired,
};
