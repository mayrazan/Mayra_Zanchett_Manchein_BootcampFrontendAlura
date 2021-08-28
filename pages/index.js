/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import SectionWrapper from '../src/components/commons/SectionWrapper';
import Modal from '../src/components/commons/Modal';
import Form from '../src/components/patterns/Form';
import Contact from '../src/components/commons/Contact';
import SectionTitle from '../src/components/commons/SectionTitle';
import Box from '../src/components/layout/Box';
import Card from '../src/components/commons/Card';
import projects from '../src/utils/projects';
import theme from '../src/theme';

export default function Home() {
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
      <Header />
      <Cover isHome />
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
      <Footer />
    </>
  );
}
