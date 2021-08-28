import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import ButtonLink from '../ButtonLink';

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

Grid.CoverAreaLeft = styled.div`
  grid-area: coverAreaLeft;
  ${breakpointsMedia({
    md: css`
      width: 415px;
      height: 505px;
    `,
  })}
`;

Grid.CoverAreaCenter = styled.div`
  grid-area: coverAreaCenter;
  align-self: center;
  background: url('/images/bg1.jpg') no-repeat;
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
        gap: 24px;
      `,
      md: css`
        gap: 32px;
      `,
    })}
  ${breakpointsMedia({
    md: css`
      padding: 0;
    `,
  })};
`;

Grid.CoverAreaRight = styled.div`
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
      width: 450px;
      height: 450px;
    `,
  })}
`;

const Cover = ({ isHome, gap }) => (
  <Grid>
    <Grid.CoverAreaLeft />

    <Grid.CoverAreaCenter gap={gap}>
      {isHome ? (
        <>
          <Text
            tag="h1"
            variant={{ xs: 'titleSM', md: 'title' }}
            textAlign="center"
            margin="0"
          >
            MAYRA ZANCHETT MANCHEIN
          </Text>
          <Text tag="h3" variant="subTitle" textAlign="center" margin="0">
            Portfolio
          </Text>
          <ButtonLink
            text="Ver projetos"
            href="#ProjectsWrapper"
            direction="down"
          />
        </>
      ) : (
        <>
          <ProfileImage
            src="https://github.com/mayrazan.png"
            alt="imagem de perfil"
          />
          <Text tag="h4" variant="subTitle" textAlign="center" margin="0">
            Desenvolvedora Front-end
          </Text>
          <ButtonLink text="Sobre mim" href="#AboutMe" direction="down" />
        </>
      )}
    </Grid.CoverAreaCenter>

    <Grid.CoverAreaRight />
  </Grid>
);

export default Cover;

Cover.propTypes = {
  isHome: PropTypes.bool,
  gap: PropTypes.bool,
};

Cover.defaultProps = {
  isHome: false,
  gap: false,
};
