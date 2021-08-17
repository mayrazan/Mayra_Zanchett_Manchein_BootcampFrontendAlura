/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import ProjectsWrapper from '../src/components/commons/ProjectsWrapper';
import Modal from '../src/components/commons/Modal';
import Form from '../src/components/patterns/Form';
import Contact from '../src/components/commons/Contact';

export default function Home() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <Cover />
      <ProjectsWrapper />
      <Modal isOpen={modal} onClose={handleModal}>
        {(props) => <Form isOpen={modal} onClose={handleModal} props={props} />}
      </Modal>
      <Contact onClick={handleModal} />
      <Footer />
    </>
  );
}
