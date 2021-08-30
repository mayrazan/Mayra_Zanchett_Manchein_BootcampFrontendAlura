/* eslint-disable react/jsx-props-no-spreading */
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

      ${({ isDesktop }) =>
        isDesktop &&
        css`
          width: 70%;
        `}
    `,
  })}
`;

const CardImage = ({ src, alt, isDesktop, ...props }) => (
  <ImageStyled
    loading="lazy"
    src={src}
    alt={alt}
    isDesktop={isDesktop}
    {...props}
  />
);

export default CardImage;

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool,
};

CardImage.defaultProps = {
  isDesktop: false,
};
