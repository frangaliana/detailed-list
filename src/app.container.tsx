import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { theme } from './app.theme';

import { Title } from './common/styled-fonts';
import { List } from './components/list';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeStyledProvider theme={theme}>
      <Title>Detailed-List</Title>
      <List />
    </ThemeStyledProvider>
  );
};
