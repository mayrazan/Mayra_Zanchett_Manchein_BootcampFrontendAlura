import React from 'react';
import styled from 'styled-components';

const FooterIconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.nav.color};
  width: fit-content;
  height: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const FooterIcon = () => (
  <FooterIconContainer>
    <img src="/icons/twitter.svg" alt="twitter" />
    <img src="/icons/github.svg" alt="github" />
    <img src="/icons/medium.svg" alt="medium" />
  </FooterIconContainer>
);

export default FooterIcon;
