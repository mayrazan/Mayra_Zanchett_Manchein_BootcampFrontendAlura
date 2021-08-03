import React from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/layout/Cover';
import ProjectsWrapper from '../src/components/layout/ProjectsWrapper';

export default function Home() {
  return (
    <>
      <Cover />
      <Header />
      <ProjectsWrapper />
      <Footer />
    </>
  );
}
