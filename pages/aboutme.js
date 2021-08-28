/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import Text from '../src/components/foundation/Text';
import breakpointsMedia from '../src/theme/utils/breakpointsMedia';
import SectionTitle from '../src/components/commons/SectionTitle';
import SectionWrapper from '../src/components/commons/SectionWrapper';
import Box from '../src/components/layout/Box';
import theme from '../src/theme';

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

export default function AboutMe() {
  return (
    <>
      <Header />
      <Cover gap>
        <ProfileImage
          src="https://github.com/mayrazan.png"
          alt="imagem de perfil"
        />
        <Text tag="h4" variant="subTitle" textAlign="center" margin="0">
          Desenvolvedora Front-end
        </Text>
      </Cover>
      <SectionWrapper
        flexDirection="column"
        width={{ md: '50%' }}
        margin="auto"
      >
        <SectionTitle text="SOBRE MIM" />

        <Text tag="p" textAlign="justify" margin="0">
          Olá, meu nome é Mayra, sou desenvolvedora front-end e atualmente
          trabalho com tecnologias como: React, styled components, Typescript.
          Sou estudante do bootcamp de front-end avançado da Alura e estou no 4º
          semestre de análise e desenvolvimento de sistemas pela UNOESC. Abaixo
          você pode conferir meus repositórios do github de projetos
          desenvolvidos.
        </Text>
      </SectionWrapper>

      <SectionWrapper
        flexDirection="column"
        backgroundColor={theme.colors.background.cardWrapper.color}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '32px', md: '50px' }}
        >
          <SectionTitle text="MEUS REPOSITÓRIOS" />

          <Box gap="16px" display="flex" flexDirection="column">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Text tag="p" textAlign="justify" margin="0" bold>
                Projeto Report
              </Text>
              <Text tag="a" textAlign="justify" margin="0" color="link">
                https://github.com/me/projeto-report
              </Text>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Text tag="p" textAlign="justify" margin="0" bold>
                Projeto Report
              </Text>
              <Text tag="a" textAlign="justify" margin="0" color="link">
                https://github.com/me/projeto-report
              </Text>
            </div>
          </Box>
        </Box>
      </SectionWrapper>
      <Footer />
    </>
  );
}
