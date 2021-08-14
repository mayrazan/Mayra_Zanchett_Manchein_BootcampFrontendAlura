import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../FooterIcon';

const FooterContainer = styled.footer`
  min-height: 75px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.background.navMain.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => (
  <FooterContainer>
    <FooterIcon />
  </FooterContainer>
);

export default Footer;
