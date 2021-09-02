import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import Box from '../../layout/Box';
import Text from '../../foundation/Text';
import * as S from './style';

const CardRepos = ({ repos }) => {
  const [pages, setPages] = useState(0);

  const onNextPage = () => {
    setPages((prev) => prev + 4);
  };

  const onPrevPage = () => {
    setPages((prev) => prev - 4);
  };

  const currentRepos = repos.slice(pages, pages + 4);

  return (
    <>
      {currentRepos.map((repo) => (
        <S.CardContainer key={repo.id} length={repo.name.length}>
          <S.CardInfo>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              height="inherit"
              flexDirection={{ xs: 'column', md: 'row' }}
              gap={{ xs: '10px', md: '0' }}
            >
              <div
                style={{
                  gap: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  alignSelf: 'baseline',
                  width: '100%',
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
                  maxWidth={{ md: '80%' }}
                />
                <Text tag="span" margin="0" bold>
                  {repo.language}
                </Text>
              </div>
              <Box alignSelf={{ xs: 'flex-end', md: 'center' }}>
                <S.CardLink
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Conferir"
                >
                  <S.CardIcon className="fa fa-arrow-right" />
                </S.CardLink>
              </Box>
            </Box>
          </S.CardInfo>
        </S.CardContainer>
      ))}
      <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
        <S.ButtonStyled
          type="button"
          onClick={onPrevPage}
          disabled={!pages}
          aria-label="Anterior"
        >
          <S.CardIcon className="fa fa-arrow-left" />
        </S.ButtonStyled>
        <S.ButtonStyled
          type="button"
          onClick={onNextPage}
          disabled={pages + currentRepos.length >= repos.length}
          aria-label="Próximo"
        >
          <S.CardIcon className="fa fa-arrow-right" />
        </S.ButtonStyled>
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
