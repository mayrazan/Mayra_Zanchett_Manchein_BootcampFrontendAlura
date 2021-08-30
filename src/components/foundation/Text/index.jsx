/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';

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
  ${propToStyle('maxWidth')}
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
  if (props.href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={props.href}
        color={color}
        bold={bold}
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase as={tag} variant={variant} color={color} bold={bold} {...props}>
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
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  color: '#4e4e4e',
  bold: false,
  href: null,
};
