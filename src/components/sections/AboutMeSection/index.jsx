import React from 'react';
import Text from '../../foundation/Text';
import SectionTitle from '../../commons/SectionTitle';
import SectionWrapper from '../../commons/SectionWrapper';

const AboutMeSection = () => (
  <SectionWrapper flexDirection="column" width={{ md: '50%' }} margin="auto">
    <SectionTitle text="SOBRE MIM" id="AboutMe" />

    <Text tag="p" textAlign="justify" margin="0">
      Olá, meu nome é Mayra, sou desenvolvedora front-end e atualmente trabalho
      com tecnologias como: React, styled components, Typescript. Sou estudante
      do bootcamp de front-end avançado da Alura e estou no 4º semestre de
      análise e desenvolvimento de sistemas pela UNOESC. Abaixo você pode
      conferir meus repositórios do github de projetos desenvolvidos.
    </Text>
  </SectionWrapper>
);

export default AboutMeSection;
