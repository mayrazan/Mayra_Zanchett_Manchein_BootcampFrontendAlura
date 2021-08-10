import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ContainerHighlightText = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  background-color: ${({ theme }) => theme.colors.background.main.color};
  box-sizing: border-box;
  position: absolute;
  width: 147px;
  height: 31px;
  z-index: 1;
  overflow: hidden;
  text-align: center;
  top: 4px;
  left: 4px;
  ${breakpointsMedia({
    md: css`
      width: 228px;
      height: 48px;
      bottom: 260px;
      left: 10px;
    `,
  })}
`;

const HighlightContainer = ({ text }) => (
  <ContainerHighlightText>
    <Text variant={{ xs: 'highlightSM', md: 'highlightTitle' }} margin="0">
      {text}
    </Text>
  </ContainerHighlightText>
);

export default HighlightContainer;

HighlightContainer.propTypes = {
  text: PropTypes.string.isRequired,
};
