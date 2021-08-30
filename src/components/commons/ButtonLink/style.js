import styled, { css } from 'styled-components';

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
  text-decoration: none;
  ${({ theme }) => css`
    background: ${theme.colors.secondary.color};
    color: ${theme.colors.background.main.color};
    font-size: ${theme.typographyFonts.buttonLink.fontSize};
    font-weight: ${theme.typographyFonts.buttonLink.fontWeight};
  `}

  ${({ as }) =>
    as === 'button' &&
    css`
      cursor: pointer;
    `}
    
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: gray;
          cursor: not-allowed;
        `
      : css`
          &:hover {
            ${({ theme }) => css`
              background: ${theme.colors.background.main.color};
              color: ${theme.colors.secondary.color};
              border: 2px solid ${theme.colors.secondary.color};
            `}
          }
        `}
`;

const TextSpan = styled.span`
  padding: 0 20px 0 30px;
  text-transform: uppercase;
  font-size: ${({ font }) => (font ? '32px' : '14px')};
`;

const BtnSpan = styled.span`
  padding: 10px;
  position: relative;
  border-radius: 50%;
  transition: all 0.5s ease;
  ${({ theme }) => css`
    border: 3px solid ${theme.colors.background.main.color};
    background-color: ${theme.colors.background.main.color};
  `}

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

export { BtnSpan, Container, IconArrow, TextLink, TextSpan };
