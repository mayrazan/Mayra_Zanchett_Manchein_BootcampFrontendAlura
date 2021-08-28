import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Text from '../../foundation/Text';

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 32px;

  a {
    background-size: 0% 5px;
  }

  .active,
  a:hover {
    background-size: 100% 5px;
    background-image: linear-gradient(rgb(111, 30, 81), rgb(111, 30, 81));
    background-repeat: no-repeat;
    transition: background-size 0.3s;
    background-position: bottom;
    padding-bottom: 5px;
  }
`;

const NavBar = () => {
  const router = useRouter();

  return (
    <NavContainer>
      <Text
        tag="a"
        variant={{ md: 'menuText' }}
        color="contrastText"
        href="/aboutme"
        className={router.pathname === '/aboutme' ? 'active' : null}
      >
        Sobre Mim
      </Text>
      {router.pathname === '/' && (
        <Text
          tag="a"
          variant={{ md: 'menuText' }}
          color="contrastText"
          href="#Contact"
        >
          Contato
        </Text>
      )}
    </NavContainer>
  );
};
export default NavBar;
