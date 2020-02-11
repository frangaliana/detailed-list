import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from '../../styled-components';

import { fontFaces } from '../../app.fonts';
import { Theme } from '../../app.theme';
import { TagsHeader } from '../../common';

type ThemeStyledProviderProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  :root{
    font-size: ${({ theme: { typography } }): string => `${typography.fontSize}`};
  }

  ::selection{
    background: ${({ theme: { palette } }): string => palette.highlighted};
    color: ${({ theme: { palette } }): string => palette.text};
  }

  ::-webkit-scrollbar {
    width: ${({ theme: { spacing } }) => spacing(0.5)}px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { palette } }): string => palette.primary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { palette } }): string => palette.highlighted};
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ theme: { palette } }): string => palette.text};
    background-color: ${({ theme: { palette } }): string => palette.background};
  }
`;

export const ThemeStyledProvider: React.FC<ThemeStyledProviderProps> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TagsHeader theme={theme} />
      {children}
    </ThemeProvider>
  );
};
