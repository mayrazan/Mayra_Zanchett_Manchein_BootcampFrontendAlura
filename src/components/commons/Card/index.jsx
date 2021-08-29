import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import useWindowSize from '../../../hooks/useWindowSize';
import moveElement from '../../../utils/moveElement';
import Box from '../../layout/Box';
import HighlightContainer from '../HighlightContainer';

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary.color};
  width: 290px;
  height: 249px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  background-color: ${({ theme }) => theme.colors.background.card.color};
  overflow: hidden;

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

  &:hover {
    visibility: visible;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-name: fadeInDown;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  @keyframes fadeInDown {
    0% {
      transform: translateY(-12px);
    }
    25% {
      transform: translateY(-9px);
    }
    50% {
      transform: translateY(-6px);
    }
    75% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }
  box-shadow: 0 15px 30px 0 rgb(111 30 81 / 15%);
  border-radius: 10px;
`;

const Card = ({ projects }) => {
  const { isDesktop } = useWindowSize();
  const router = useRouter();

  const changeOrder = isDesktop
    ? moveElement(projects, 0, projects.length)
    : projects;

  return changeOrder.map((project) => (
    <CardContainer key={project.id} onClick={() => router.push(`projects/${project.id}`)}>
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
