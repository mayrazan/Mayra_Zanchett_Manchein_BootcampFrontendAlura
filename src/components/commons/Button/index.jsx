import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, color }) => theme.colors.primary.main[color]};
  background: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({ theme, color }) => theme.colors.primary.main[color]};
  color: ${({ theme, color }) => theme.colors.primary.main[color]};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${TextStyleVariants('paragraph1')}
  ${({ ghost }) => {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: 5px;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants('paragraph1')}
    `,
    md: css`
      ${TextStyleVariants('paragraph1')}
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
