import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line consistent-return
export const TextStyleVariants = (name) => {
  if (name)
    return css`
      ${({ theme, bold }) => css`
        font-size: ${theme.typographyFonts[name].fontSize};
        font-weight: ${bold ? 'bold' : theme.typographyFonts[name].fontWeight};
        line-height: ${theme.typographyFonts[name].lineHeight};
      `}
    `;
};

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('flexGrow')}
  color: ${({ theme, color }) => color && theme.colors.primary.main[color]};
  ${({ variant }) => {
    if (typeof variant === 'string') {
      return TextStyleVariants(variant);
    }
    return breakpointsMedia({
      xs: css`
        ${TextStyleVariants(variant.xs)}
      `,
      md: css`
        ${TextStyleVariants(variant.md)}
      `,
    });
  }}
  ${({ as }) =>
    as === 'a' &&
    css`
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary.color};
      }
    `}
`;

export default function Text({
  variant,
  children,
  tag,
  color,
  bold,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      bold={bold}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bold: PropTypes.bool,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  color: '#4e4e4e',
  bold: false,
};
