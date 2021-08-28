/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import SectionTitle from '../src/components/commons/SectionTitle';
import SectionWrapper from '../src/components/commons/SectionWrapper';
import Box from '../src/components/layout/Box';
import theme from '../src/theme';
import CardRepos from '../src/components/commons/CardRepos';
import AboutMeSection from '../src/components/commons/AboutMeSection';

export default function AboutMe({ repos }) {
  return (
    <>
      <Header />
      <Cover gap />
      <AboutMeSection />

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

          <Box display="flex" flexWrap="wrap">
            <CardRepos repos={repos} />
          </Box>
        </Box>
      </SectionWrapper>
      <Footer />
    </>
  );
}

AboutMe.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export async function getStaticProps() {
  const repos = await fetch('https://api.github.com/users/mayrazan/repos')
    .then((response) => response.json())
    .then((res) => res);
  return {
    props: {
      repos,
    },
  };
}
