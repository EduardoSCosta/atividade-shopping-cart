import { ThemeProvider } from 'styled-components';
import Store from './components/Store';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
}

export default App;
