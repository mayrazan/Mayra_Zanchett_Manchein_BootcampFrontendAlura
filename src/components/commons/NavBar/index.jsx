import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 32px;
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
