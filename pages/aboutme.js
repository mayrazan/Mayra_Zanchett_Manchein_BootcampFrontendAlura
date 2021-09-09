/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../src/components/commons/SectionTitle';
import SectionWrapper from '../src/components/commons/SectionWrapper';
import Box from '../src/components/layout/Box';
import theme from '../src/theme';
import CardRepos from '../src/components/commons/CardRepos';
import AboutMeSection from '../src/components/sections/AboutMeSection';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutMe({ repos, totalRepos }) {
  return (
    <>
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
          <SectionTitle text="MEUS REPOSITÓRIOS" textAlign={{ xs: 'center' }} />

          <Box display="flex" flexWrap="wrap">
            <CardRepos repos={repos} totalRepos={totalRepos} />
          </Box>
        </Box>
      </SectionWrapper>
    </>
  );
}

export default websitePageHOC(AboutMe, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
    coverProps: {
      gap: true,
    },
    menuProps: {
      display: true,
    },
  },
});

AboutMe.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  totalRepos: PropTypes.number.isRequired,
};

export async function getStaticProps() {
  const repos = await fetch(
    'https://api.github.com/users/mayrazan/repos?page=1&per_page=4',
  )
    .then((response) => response.json())
    .then((res) => res);

  const totalRepos = await fetch('https://api.github.com/users/mayrazan/repos')
    .then((response) => response.json())
    .then((res) => res);
  return {
    props: {
      repos,
      totalRepos: totalRepos.length,
    },
  };
}
