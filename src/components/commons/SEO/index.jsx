import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const baseTitle =
    'Portfolio - Projeto desenvolvido no Bootcamp JAMStack da Alura';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;
  const description =
    'Portfolio de projetos desenvolvido para o desafio referente aos módulos do bootcamp JAMStack da Alura.';
  const image =
    'https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const urlBase = 'https://portfolio-alura-bootcamp.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
