export const theme = {
  typography: {
    fontFamily: `"'Inter', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#00BFAA',
    secondary: '#EDEFF8',
    text: '#8898aa',
    navigationBackground: '#242A33',
    background: '#2A303B',
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
