import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const FooterIconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.nav.color};
  width: fit-content;
  height: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  gap: 32px;

  .icon-3d {
    padding: 10px;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary.color};
    }
  }
`;

const FooterIcon = () => (
  <FooterIconContainer>
    <Text tag="a" href="https://twitter.com/mayrazan" target="_blank">
      <i className="fa fa-twitter fa-3x icon-3d" />
    </Text>
    <Text tag="a" href="https://github.com/mayrazan" target="_blank">
      <i className="fa fa-github fa-3x icon-3d" />
    </Text>
    <Text
      tag="a"
      href="https://linkedin.com/in/mayra-zanchett-manchein"
      target="_blank"
    >
      <i className="fa fa-linkedin fa-3x icon-3d" />
    </Text>
  </FooterIconContainer>
);

export default FooterIcon;
