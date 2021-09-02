import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      flex: ${({ length }) => (length > 40 ? 'auto' : '0 0 50%')};
    `,
  })}
`;

const CardInfo = styled.div`
  padding: 30px;
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.background.main.color};
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.colors.background.boxShadow.color} 0px 15px
    30px 0px;
  min-width: 50%;
  min-height: 150px;
  height: 100%;
`;

const CardLink = styled.a`
  padding: 6px;
  color: ${({ theme }) => theme.colors.background.main.color};
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.5s ease;
  border: 2px solid ${({ theme }) => theme.colors.secondary.color};
  text-decoration: none;
  cursor: pointer;

  ${breakpointsMedia({
    md: css`
      padding: 10px;
    `,
  })}

  &:hover {
    border-color: ${({ theme }) => theme.colors.background.hoverBtn.color};
  }
`;

const CardIcon = styled.i`
  width: 35px;
  height: 35px;
  line-height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.colors.secondary.color};
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpointsMedia({
    md: css`
      width: 50px;
      height: 50px;
      display: inline-block;
    `,
  })}

  &:hover {
    background: ${({ theme }) => theme.colors.background.hoverBtn.color};
  }
`;

const ButtonStyled = styled.button`
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

export { CardContainer, CardInfo, CardLink, CardIcon, ButtonStyled };
