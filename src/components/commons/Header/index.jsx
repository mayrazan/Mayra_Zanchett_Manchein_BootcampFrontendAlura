import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Logo from '../Logo';
import NavBar from '../NavBar';

const SectionContainer = styled.section`
  min-height: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.navMain.color};
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpointsMedia({
    md: css`
      justify-content: space-around;
    `,
  })}
  border-top: 2px solid ${({ theme }) => theme.colors.background.nav.color};
`;

const Header = () => (
  <SectionContainer>
    <Logo />
    <NavBar />
  </SectionContainer>
);

export default Header;
