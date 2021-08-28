import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import Box from '../../layout/Box';
import Text from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import useWindowSize from '../../../hooks/useWindowSize';

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      flex: 0 0 50%;
    `,
  })}
`;

const CardInfo = styled.div`
  padding: 30px;
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.background.main.color};
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.colors.background.boxShadow.color} 0px 15px
    30px 0px;
  min-width: 50%;
  min-height: 150px;
  height: 100%;
`;

const CardLink = styled.a`
  padding: 10px;
  color: ${({ theme }) => theme.colors.background.main.color};
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.5s ease;
  border: 2px solid ${({ theme }) => theme.colors.secondary.color};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.background.hoverBtn.color};
  }
`;

const CardIcon = styled.i`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.colors.secondary.color};

  &:hover {
    background: ${({ theme }) => theme.colors.background.hoverBtn.color};
  }
`;

const ButtonStyled = styled.button`
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

const CardRepos = ({ repos }) => {
  const { isDesktop } = useWindowSize();
  const [page, setPage] = useState(0);

  const nextRepos = () => {
    if (isDesktop) {
      setPage((prev) => prev + 6);
    } else {
      setPage((prev) => prev + 3);
    }
  };

  const previousRepos = () => {
    if (isDesktop) {
      setPage((prev) => prev - 6);
    } else {
      setPage((prev) => prev - 3);
    }
  };

  const currentRepos = isDesktop
    ? repos.slice(page, page + 6)
    : repos.slice(page, page + 3);

  return (
    <>
      {currentRepos.map((repo) => (
        <CardContainer key={repo.id}>
          <CardInfo>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              height="inherit"
            >
              <div
                style={{
                  gap: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardTitle
                  text={repo.name}
                  textAlign="justify"
                  color="repo"
                  isRepo
                />
                <CardText
                  text={repo.description ? repo.description : ''}
                  textAlign="start"
                  maxWidth="80%"
                />
                <Text tag="span" margin="0" bold>
                  {repo.language}
                </Text>
              </div>
              <div>
                <CardLink href={repo.html_url} target="_blank">
                  <CardIcon className="fa fa-arrow-right" />
                </CardLink>
              </div>
            </Box>
          </CardInfo>
        </CardContainer>
      ))}
      <div style={{ marginLeft: 'auto' }}>
        <ButtonStyled
          type="button"
          onClick={previousRepos}
          disabled={page === 0}
        >
          <CardIcon className="fa fa-arrow-left" />
        </ButtonStyled>
        <ButtonStyled
          type="button"
          onClick={nextRepos}
          disabled={currentRepos.length < 6 && currentRepos.length < 3}
        >
          <CardIcon className="fa fa-arrow-right" />
        </ButtonStyled>
      </div>
    </>
  );
};

export default CardRepos;

CardRepos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      html_url: PropTypes.string,
    }),
  ).isRequired,
};
