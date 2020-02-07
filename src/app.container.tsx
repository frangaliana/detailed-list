import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { theme } from './app.theme';

import { Title } from './common/styled-fonts';
import { PaginatedList, ErrorBoundary } from './components';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeStyledProvider theme={theme}>
      <ErrorBoundary>
        <Title>Detailed-List</Title>
        <PaginatedList />
      </ErrorBoundary>
    </ThemeStyledProvider>
  );
};
