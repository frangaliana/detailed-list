import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { theme } from './app.theme';
import { ErrorBoundary } from './common';

import { GeneralLayout } from './layouts';

import { Header, PaginatedList } from './pods';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeStyledProvider theme={theme}>
      <ErrorBoundary>
        <GeneralLayout HeaderContent={<Header />} ListContent={<PaginatedList />} />
      </ErrorBoundary>
    </ThemeStyledProvider>
  );
};
