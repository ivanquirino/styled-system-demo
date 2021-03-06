import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'system-theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
