import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-areas: 'coverAreaLeft' 'coverAreaCenter' 'coverAreaRight';
  grid-template-columns: auto;
  grid-template-rows: 50px auto 50px;
  background-color: rgb(5 5 5 / 78%);
  ${breakpointsMedia({
    md: css`
      grid-template-areas: 'coverAreaLeft coverAreaCenter coverAreaRight';
      grid-template-columns: 180px auto 180px;
      grid-template-rows: auto;
      height: calc(100vh - 60px);
    `,
  })}
`;

const CoverAreaLeft = styled.div`
  grid-area: coverAreaLeft;
  ${breakpointsMedia({
    md: css`
      width: 415px;
      height: 505px;
    `,
  })}
`;

const CoverAreaCenter = styled.div`
  grid-area: coverAreaCenter;
  align-self: center;
  background: url('/images/bg1-phone.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  border-radius: 30px;
  padding: 15px 0px;
  ${({ gap }) =>
    gap &&
    breakpointsMedia({
      xs: css`
        gap: 10px;
      `,
    })}
  ${breakpointsMedia({
    md: css`
      padding: 0;
      @media screen and (max-height: 600px) {
        height: auto;
      }
      background: url('/images/bg1.jpg') no-repeat;
      background-size: cover;
    `,
  })};
`;

const CoverAreaRight = styled.div`
  grid-area: coverAreaRight;
  align-self: auto;
  justify-self: flex-end;
  ${breakpointsMedia({
    md: css`
      width: 415px;
      height: 505px;
      align-self: flex-end;
    `,
  })}
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  align-self: center;
  ${breakpointsMedia({
    md: css`
      width: 385px;
      height: 385px;
      @media screen and (max-height: 600px) {
        max-width: 385px;
        max-height: 385px;
        width: 60%;
        height: auto;
      }
    `,
  })}
`;

export { Grid, ProfileImage, CoverAreaRight, CoverAreaCenter, CoverAreaLeft };
