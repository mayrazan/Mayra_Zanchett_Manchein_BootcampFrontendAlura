import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import useWindowSize from '../../../hooks/useWindowSize';
import moveElement from '../../../utils/moveElement';
import Box from '../Box';
import HighlightContainer from '../HighlightContainer';

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background.nav.color};
  width: 290px;
  height: 249px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;

  &:first-of-type {
    position: relative;
  }

  ${breakpointsMedia({
    md: css`
      height: 510px;
      max-width: 425px;
      gap: 25px;
      flex: 0 0 25%;

      &:last-of-type {
        height: 320px;
        min-width: 288px;
        max-width: none;
        flex: 0 0 calc(100% - 25% + 34px);
        flex-direction: row;
        position: relative;
      }
    `,
  })}
`;

const Card = ({ projects }) => {
  const { isDesktop } = useWindowSize();

  const changeOrder = isDesktop
    ? moveElement(projects, 0, projects.length)
    : projects;

  return changeOrder.map((project) => (
    <CardContainer key={project.id}>
      {project.type === 'important' && <HighlightContainer text="Destaque" />}
      {project.type === 'important' && isDesktop ? (
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
            <CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit." />
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
