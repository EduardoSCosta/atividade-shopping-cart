const colors = {
  white: '#fcfcfc',
  black: '#242428',
  red300: '#ff6347',
  green300: '#48d444',
  blue300: '#1976d2',
  gray50: '#fafafa',
  gray100: '#e5e5e5',
  gray200: '#e0e0e0',
  gray300: '#9e9e9e',
  gray400: '#8a8a8a',
  gray500: '#676767'
}

const space = [0, 2, 4, 8, 16, 32, 64].map(value => `${value}px`);

const fonts = '"Roboto","Helvetica","Arial",sans-serif';

const fontSizes = [8, 12, 16, 20, 24, 28, 32].map(value => `${value}px`);

const fontWeights = [400, 500, 600, 700];

const radii = [0, 5, 10, 15, 20, 25, 30].map(value => `${value}px`);

const zIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const sizes = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600].map(value => `${value}px`);

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  zIndices,
  sizes
}

const themes = {
  light: {
    ...theme,
    colors: {
      ...theme.colors,
      backgroundColor: '#f9f9f9',
      textColor: '#2b2b2b'
    }
  },
  dark: {
    ...theme,
    colors: {
      ...theme.colors,
      backgroundColor: '#2b2b2b',
      textColor: '#f9f9f9'
    }
  }
}

export default themes;
