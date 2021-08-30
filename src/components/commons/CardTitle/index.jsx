/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text, { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const TextStyled = styled(Text)`
  text-transform: ${({ isRepo }) => (isRepo ? 'uppercase' : 'none')};
  overflow-wrap: break-word;
  ${breakpointsMedia({
    md: css`
      width: auto;
    `,
  })}
  ${({ isRepo }) => {
    if (isRepo) {
      return TextStyleVariants('titleProjectSM');
    }
    return breakpointsMedia({
      xs: css`
        ${TextStyleVariants('titleProjectSM')}
      `,
      md: css`
        ${TextStyleVariants('projectTitle')}
      `,
    });
  }}
`;

const CardTitle = ({ text, isRepo, ...props }) => (
  <TextStyled tag="h5" isRepo={isRepo} margin="0" {...props}>
    {text}
  </TextStyled>
);

export default CardTitle;

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
  isRepo: PropTypes.bool,
};

CardTitle.defaultProps = {
  isRepo: false,
};
