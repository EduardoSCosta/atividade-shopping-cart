import { css } from '@styled-system/css';
import styled, { ThemeProvider } from 'styled-components';
import Store from './components/Store';
import theme from './theme';

const Footer = styled.footer({
  backgroundColor: ({ theme }) => theme.colors.gray500,
  height: ({ theme }) => `${theme.sizes[0]}px`
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Store />
      <Footer
        css={css({
          color: theme.colors.gray50
        })}
      >
        Styled Component
      </Footer>
    </ThemeProvider>
  );
}

export default App;
