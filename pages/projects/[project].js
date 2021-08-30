import React from 'react';
import PropTypes from 'prop-types';
import db from '../../db.json';
import ProjectCardInfo from '../../src/components/commons/ProjectCardInfo';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function Project({ project }) {
  return (
    <>
      <div style={{ margin: 'auto' }}>
        <ProjectCardInfo
          key={project[0].id}
          title={project[0].title}
          description={project[0].description}
          link={project[0].link}
        />
      </div>
    </>
  );
}

export default websitePageHOC(Project, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projeto',
    },
  },
});

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
