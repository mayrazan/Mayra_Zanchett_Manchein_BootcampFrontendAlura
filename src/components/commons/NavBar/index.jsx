import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 32px;

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

const NavBar = () => (
  <NavContainer>
    <Text tag="a" variant={{ md: 'menuText' }} color="contrastText">
      Sobre Mim
    </Text>
    <Text tag="a" variant={{ md: 'menuText' }} color="contrastText">
      Contato
    </Text>
  </NavContainer>
);

export default NavBar;
