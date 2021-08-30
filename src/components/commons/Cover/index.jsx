import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import ButtonLink from '../ButtonLink';
import * as S from './style';

const Cover = ({ isHome, gap }) => (
  <S.Grid>
    <S.CoverAreaLeft />

    <S.CoverAreaCenter gap={gap}>
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
          <Text tag="h2" variant="subTitle" textAlign="center" margin="0">
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
          <S.ProfileImage
            src="https://github.com/mayrazan.png"
            alt="imagem de perfil"
            loading="lazy"
          />
          <Text tag="h4" variant="subTitle" textAlign="center" margin="0">
            Desenvolvedora Front-end
          </Text>
          <ButtonLink text="Sobre mim" href="#AboutMe" direction="down" />
        </>
      )}
    </S.CoverAreaCenter>

    <S.CoverAreaRight />
  </S.Grid>
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
