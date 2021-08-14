import React from 'react';
import styled, { css } from 'styled-components';
import projects from '../../../utils/projects';
import SectionTitle from '../SectionTitle';
import Box from '../../layout/Box';
import Card from '../Card';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ProjectsWrapperContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 40px;
  background-color: ${({ theme }) => theme.colors.background.cardWrapper.color};
  padding: 50px 0;
  border-radius: 5px;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      gap: 50px;
    `,
  })}

  .projects-section {
    position: relative;
  }
  .projects-section::after {
    content: '';
    bottom: -11%;
    left: 50%;
    height: 4px;
    width: 50px;
    position: absolute;
    background: ${({ theme }) => theme.colors.secondary.color};
    transform: translateX(-50%);
  }
`;

const ProjectsWrapper = () => (
  <ProjectsWrapperContainer id="ProjectsWrapper">
    <Box>
      <SectionTitle text="MEUS PROJETOS" className="projects-section" />
    </Box>
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
  </ProjectsWrapperContainer>
);

export default ProjectsWrapper;
