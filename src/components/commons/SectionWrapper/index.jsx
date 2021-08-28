/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const WrapperContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 40px;
  align-items: center;
  ${propToStyle('flexDirection')}
  ${propToStyle('borderRadius')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('width')}
  ${propToStyle('margin')}

  ${breakpointsMedia({
    md: css`
      gap: 50px;
    `,
  })}
`;

const SectionWrapper = ({ children, ...props }) => (
  <WrapperContainer {...props}>{children}</WrapperContainer>
);

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
