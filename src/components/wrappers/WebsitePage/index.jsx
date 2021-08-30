/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';
import Cover from '../../commons/Cover';
import Header from '../../commons/Header';

export const WebsitePageContext = React.createContext({});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  coverProps,
}) {
  return (
    <WebsitePageContext.Provider value={{}}>
      <SEO {...seoProps} />

      <Header />
      {menuProps.display && <Cover {...coverProps} />}
      {children}
      <Footer />
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: false,
  },
  coverProps: {
    gap: false,
    isHome: false,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  coverProps: PropTypes.shape({
    gap: PropTypes.bool,
    isHome: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
