import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 45px;
  margin-top: 20px;
`;

const TextLink = styled.a`
  z-index: 1;
  padding: 0;
  border: none;
  border-radius: 50px;
  letter-spacing: 1px;
  align-items: center;
  display: inline-flex;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.colors.secondary.color};
  color: ${({ theme }) => theme.colors.background.main.color};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typographyFonts.buttonLink.fontSize};
  font-weight: ${({ theme }) => theme.typographyFonts.buttonLink.fontWeight};

  &:hover {
    background: ${({ theme }) => theme.colors.background.main.color};
    color: ${({ theme }) => theme.colors.secondary.color};
    border: 2px solid ${({ theme }) => theme.colors.secondary.color};
  }
`;

const TextSpan = styled.span`
  padding: 0 20px 0 30px;
  text-transform: uppercase;
`;

const BtnSpan = styled.span`
  padding: 10px;
  border-radius: 50%;
  transition: all 0.5s ease;
  border: 3px solid ${({ theme }) => theme.colors.background.main.color};
  background-color: ${({ theme }) => theme.colors.background.main.color};
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    top: 0.5px;
    left: -1px;
    border: 3.5px solid ${({ theme }) => theme.colors.secondary.color};
    border-radius: 50%;
    padding: 14px;
  }
`;

const IconArrow = styled.i`
  &::before {
    color: ${({ theme }) => theme.colors.secondary.color};
  }
`;

const arrowClasses = {
  down: 'fa fa-arrow-down',
  up: 'fa fa-arrow-up',
  right: 'fa fa-arrow-right',
  left: 'fa fa-arrow-left',
};

export default function ContainerButtonLink({ text, href, direction }) {
  return (
    <Container>
      <TextLink href={href}>
        <TextSpan>{text}</TextSpan>
        <BtnSpan>
          <IconArrow className={arrowClasses[direction]} />
        </BtnSpan>
      </TextLink>
    </Container>
  );
}

ContainerButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
