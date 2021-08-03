import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.nav.color};
  width: fit-content;
  height: 100%;
  text-align: center;
  padding: 9px 18px;
`;

const Logo = () => (
  <LogoContainer>
    <Text variant={{ md: 'navText' }} color="contrastText" tag="a">
      {'<ME/>'}
    </Text>
  </LogoContainer>
);

export default Logo;
