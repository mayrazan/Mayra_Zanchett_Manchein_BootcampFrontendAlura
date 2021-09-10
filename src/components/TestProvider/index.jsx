import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';

const TestProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

TestProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestProvider;