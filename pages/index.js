/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import SectionWrapper from '../src/components/commons/SectionWrapper';
import Modal from '../src/components/commons/Modal';
import Form from '../src/components/patterns/Form';
import Contact from '../src/components/commons/Contact';
import SectionTitle from '../src/components/commons/SectionTitle';
import Box from '../src/components/layout/Box';
import Card from '../src/components/commons/Card';
import theme from '../src/theme';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { getProjects } from '../src/services/cms/getProject';

function Home({ projects }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"');
    if (modal && !isSafeArea) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modal]);

  return (
    <>
      <SectionWrapper
        id="ProjectsWrapper"
        flexDirection="column"
        backgroundColor={theme.colors.background.cardWrapper.color}
        borderRadius="5px"
      >
        <SectionTitle text="MEUS PROJETOS" />

        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          gap={{ xs: '32px', md: '18px' }}
          flexWrap="wrap"
        >
          <Card projects={projects} />
        </Box>
      </SectionWrapper>
      <Modal isOpen={modal} onClose={handleModal}>
        {(props) => <Form props={props} />}
      </Modal>
      <Contact onClick={handleModal} />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    coverProps: {
      isHome: true,
    },
    menuProps: {
      display: true,
    },
  },
});

export async function getStaticProps({ preview }) {
  const projects = await getProjects({ preview });

  return {
    props: {
      projects,
    },
  };
}

Home.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
