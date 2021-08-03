import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ImageStyled = styled.img`
  width: 289px;
  max-height: 177px;
  object-fit: cover;
  height: 100%;
  ${breakpointsMedia({
    md: css`
      max-height: 390px;
      width: 100%;
    `,
  })}
`;

const CardImage = ({ src, alt }) => <ImageStyled src={src} alt={alt} />;

export default CardImage;

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
