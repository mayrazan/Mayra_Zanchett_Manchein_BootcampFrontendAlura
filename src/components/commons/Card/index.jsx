import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import useWindowSize from '../../../hooks/useWindowSize';
import moveElement from '../../../utils/moveElement';
import Box from '../../layout/Box';
import HighlightContainer from '../HighlightContainer';
import CardContainer from './style';

const Card = ({ projects }) => {
  const { isDesktop } = useWindowSize();
  const router = useRouter();

  const changeOrder = isDesktop
    ? moveElement(projects, 0, projects.length)
    : projects;

  return changeOrder.map((project) => (
    <CardContainer
      key={project.id}
      onClick={() => router.push(`projects/${project.id}`)}
    >
      {project.isHighlight && <HighlightContainer text="Destaque" />}
      {project.isHighlight && isDesktop ? (
        <>
          <CardImage src={project.img} alt={project.title} isDesktop />
          <Box
            alignSelf="baseline"
            display="flex"
            flexDirection="column"
            gap="30px"
            padding="28px 0 0 0"
          >
            <CardTitle text={project.title} />
            <CardText text="Projeto desenvolvido durante a imersão react da Alura, utilizando Next." />
          </Box>
        </>
      ) : (
        <>
          <CardImage src={project.img} alt={project.title} />
          <CardTitle text={project.title} />
        </>
      )}
    </CardContainer>
  ));
};

export default Card;

Card.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
