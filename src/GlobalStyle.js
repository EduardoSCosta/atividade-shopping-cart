import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0'
  },
  body: {
    fontFamily: 'sans-serif',
    backgroundColor: ({ theme }) => theme.colors.backgroundColor
  }
})

export default GlobalStyle;
