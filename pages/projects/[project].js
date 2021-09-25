import React from 'react';
import PropTypes from 'prop-types';
import ProjectCardInfo from '../../src/components/commons/ProjectCardInfo';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { getProject, getProjects } from '../../src/services/cms/getProject';

function Project({ project }) {
  return (
    <>
      <div style={{ margin: 'auto' }}>
        <ProjectCardInfo
          key={project[0].id}
          title={project[0].title}
          description={project[0].description}
          link={project[0].link}
          image={project[0].image}
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
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export async function getStaticProps({ params, preview }) {
  // const project = db.projects.filter((p) => p.title.toLowerCase() === params.project.toLowerCase());

  const currentProject = await getProject({ preview }, params.project.toUpperCase());

  return {
    props: {
      project: currentProject,
    },
  };
}

export async function getStaticPaths({ preview }) {
  const projects = await getProjects({ preview });
  const paths = projects.map((p) => ({
    params: { project: p.title.toString().toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}
