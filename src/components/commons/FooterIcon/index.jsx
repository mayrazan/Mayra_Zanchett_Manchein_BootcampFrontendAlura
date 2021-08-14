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

const socialMediaIcons = [
  {
    id: 1,
    className: 'fa fa-twitter fa-3x icon-3d',
    link: 'https://twitter.com/mayrazan',
  },
  {
    id: 2,
    className: 'fa fa-github fa-3x icon-3d',
    link: 'https://github.com/mayrazan',
  },
  {
    id: 3,
    className: 'fa fa-linkedin fa-3x icon-3d',
    link: 'https://linkedin.com/in/mayra-zanchett-manchein',
  },
];

const FooterIcon = () => (
  <FooterIconContainer>
    {socialMediaIcons.map((icon) => (
      <Text tag="a" href={icon.link} target="_blank" key={icon.id}>
        <i className={icon.className} />
      </Text>
    ))}
  </FooterIconContainer>
);

export default FooterIcon;
