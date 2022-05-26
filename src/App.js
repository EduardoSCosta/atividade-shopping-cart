import css from '@styled-system/css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components';
import Store from './components/Store';
import GlobalStyle from './GlobalStyle';
import themes from './theme';

const useTheme = () => {
  const localStorageTheme = () => {
    const theme = localStorage.getItem('shopping-cart-theme');
    return theme ? theme : 'light';
  }

  const [currentTheme, setCurrentTheme] = useState(localStorageTheme());

  useEffect(() => {
    localStorage.setItem('shopping-cart-theme', currentTheme);
  }, [currentTheme]);

  const switchTheme = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  return { currentTheme, switchTheme }
}

const App = () => {

  const { currentTheme, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <Button onClick={switchTheme} css={css({ position: 'absolute' })}>
        {currentTheme === 'light' ? 'dark' : 'light'}
      </Button>
      <Store />
    </ThemeProvider>
  );
}

export default App;
