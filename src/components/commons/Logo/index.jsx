import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.nav.color};
  width: fit-content;
  height: 100%;
  text-align: center;
  padding: 9px 18px;

  a {
    background-size: 0% 5px;
  }

  a:hover {
    background-size: 100% 5px;
    background-image: linear-gradient(rgb(111, 30, 81), rgb(111, 30, 81));
    background-repeat: no-repeat;
    transition: background-size 0.3s;
    background-position: bottom;
    padding-bottom: 5px;
  }
`;

const Logo = () => (
  <LogoContainer>
    <Text
      variant={{ md: 'navText' }}
      color="contrastText"
      tag="a"
      href="#ProjectsWrapper"
    >
      {'<Projetos />'}
    </Text>
  </LogoContainer>
);

export default Logo;
