import React from 'react';
import styled, { css } from 'styled-components';
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
  /* transform: rotate(-8deg);
  background: url('/images/planta2.svg') no-repeat;
  background-size: cover; */
  width: 214.97px;
  height: 322.31px;
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
  ${breakpointsMedia({
    md: css`
      padding: 0;
    `,
  })}
`;

Grid.CoverAreaRight = styled.div`
  grid-area: coverAreaRight;
  /* background: url('/images/planta.svg') no-repeat;
  background-size: cover; */
  width: 214.97px;
  height: 322.31px;
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

const Cover = () => (
  <Grid>
    <Grid.CoverAreaLeft />

    <Grid.CoverAreaCenter>
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
    </Grid.CoverAreaCenter>

    <Grid.CoverAreaRight />
  </Grid>
);

export default Cover;
