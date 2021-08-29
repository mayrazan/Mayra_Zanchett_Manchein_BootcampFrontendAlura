import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../src/components/commons/Footer';
import Header from '../../src/components/commons/Header';
import db from '../../db.json';
import ProjectCardInfo from '../../src/components/commons/ProjectCardInfo';

export default function Project({ project }) {
  return (
    <>
      <Header />
      <div style={{ margin: 'auto' }}>
        <ProjectCardInfo
          key={project[0].id}
          title={project[0].title}
          description={project[0].description}
          link={project[0].link}
        />
      </div>
      <Footer />
    </>
  );
}

Project.propTypes = {
  project: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export async function getStaticProps({ params }) {
  const project = db.projects.filter((p) => p.id.toString() === params.project);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = db.projects.map((p) => ({
    params: { project: p.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
