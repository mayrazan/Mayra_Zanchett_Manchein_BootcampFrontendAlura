import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import Box from '../../layout/Box';
import Text from '../../foundation/Text';
import * as S from './style';
import useWindowSize from '../../../hooks/useWindowSize';

const CardRepos = ({ repos }) => {
  const [pages, setPages] = useState(1);
  const [currentRepos, setCurrentRepos] = useState(repos);

  const onNextPage = () => {
    setPages((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setPages((prev) => prev - 1);
  };

  useEffect(() => {
    if (pages > 1) {
      (async () => {
        const pageRepos = await fetch(
          `https://api.github.com/users/mayrazan/repos?page=${pages}&per_page=4`,
        )
          .then((response) => response.json())
          .then((res) => res);
        setCurrentRepos(pageRepos);
      })();
    } else {
      setCurrentRepos(repos);
    }
  }, [pages]);

  // const currentRepos = repos.slice(pages, pages + 4);
  const { isDesktop } = useWindowSize();

  return (
    <>
      {currentRepos.map((repo) => {
        const verify =
          isDesktop && repo.name.length > 40
            ? `${repo.name.substring(0, 23)}...`
            : `${repo.name.substring(0, 10)}...`;
        return (
          <S.CardContainer key={repo.id}>
            <S.CardInfo>
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={{ xs: '10px', md: '0' }}
                alignSelf={{ xs: 'baseline' }}
                height={{ xs: '100%', md: 'inherit' }}
              >
                <div
                  style={{
                    gap: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    alignSelf: 'baseline',
                  }}
                >
                  <CardTitle
                    text={repo.name.length > 40 ? verify : repo.name}
                    textAlign="justify"
                    color="repo"
                    isRepo
                  />
                  <CardText
                    text={repo.description ? repo.description : ''}
                    textAlign="start"
                  />
                  <Text tag="span" margin="0" bold>
                    {repo.language ? repo.language : ''}
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
        );
      })}

      <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
        <S.ButtonStyled
          type="button"
          onClick={onPrevPage}
          disabled={pages === 1}
          aria-label="Anterior"
        >
          <S.CardIcon className="fa fa-arrow-left" />
        </S.ButtonStyled>
        <S.ButtonStyled
          type="button"
          onClick={onNextPage}
          // disabled={pages + currentRepos.length >= repos.length}
          disabled={currentRepos.length < 4}
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
