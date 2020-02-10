export const theme = {
  typography: {
    fontFamily: `"'Inter', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#00BFAA',
    secondary: '#8898aa',
    text: '#EDEFF8',
    background: '#2A303B',
    navigationBackground: '#242933',
    cardBackground: '#333a47',
    highlighted: '#17E6CD',
  },
  spacing: (factor: number): number => factor * 8,
  transition: ['0.2s ease-out', '0.5s ease-out'],
  breakpoints: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export type Theme = typeof theme;
