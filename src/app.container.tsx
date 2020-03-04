import * as React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeStyledProvider } from './providers';
import { theme } from './app.theme';

import { GeneralLayout } from './layouts';

import { Header, PaginatedList, ResultDetail } from './pods';
import { ErrorBoundary, NotFound } from './common';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeStyledProvider theme={theme}>
      <Router>
        <GeneralLayout
          HeaderContent={<Header />}
          ListContent={
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" render={() => <PaginatedList />} />
                <Route exact path="/characters/:characterId" render={() => <ResultDetail />} />
                <Route component={NotFound} />
              </Switch>
            </ErrorBoundary>
          }
        />
      </Router>
    </ThemeStyledProvider>
  );
};
