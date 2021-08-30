/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

const BoxStyled = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  
  &::after {
    content: '';
    bottom: -11%;
    left: 50%;
    height: 4px;
    width: 50px;
    position: absolute;
    background: ${({ theme }) => theme.colors.secondary.color};
    transform: translateX(-50%);
  }
`;

const SectionTitle = ({ text, ...props }) => (
  <BoxStyled>
    <Text
      tag="h3"
      variant={{ xs: 'titleProjectSection', md: 'title2' }}
      margin="0"
      {...props}
    >
      {text}
    </Text>
  </BoxStyled>
);

export default SectionTitle;

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
