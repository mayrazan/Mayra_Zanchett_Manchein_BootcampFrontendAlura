import React from 'react';
import styled, { css } from 'styled-components';
import projects from '../../../utils/projects';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../Box';
import Card from '../Card';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ProjectsWrapperContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 40px;
  ${breakpointsMedia({
    md: css`
      gap: 50px;
    `,
  })}
`;

const ProjectsWrapper = () => (
  <ProjectsWrapperContainer>
    <Box>
      <SectionTitle text="MEUS PROJETOS" />
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
