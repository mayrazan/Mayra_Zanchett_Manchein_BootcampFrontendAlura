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
      onClick={() => router.push(`projects/${project.title.toLowerCase()}`)}
    >
      {project.ishighlight && <HighlightContainer text="Destaque" />}
      {project.ishighlight && isDesktop ? (
        <>
          <CardImage
            src={project.image.url}
            alt={project.image.alt}
            isDesktop
          />
          <Box
            alignSelf="baseline"
            display="flex"
            flexDirection="column"
            gap="30px"
            padding="28px 0 0 0"
          >
            <CardTitle text={project.title} />
            <CardText text={project.description} />
          </Box>
        </>
      ) : (
        <>
          <CardImage src={project.image.url} alt={project.image.alt} />
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
      id: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
