import React from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import ProjectsWrapper from '../src/components/commons/ProjectsWrapper';

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <ProjectsWrapper />
      <Footer />
    </>
  );
}
