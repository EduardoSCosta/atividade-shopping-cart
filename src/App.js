import { ThemeProvider } from 'styled-components';
import Store from './components/Store';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Store />
    </ThemeProvider>
  );
}

export default App;
