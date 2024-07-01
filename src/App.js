import React from 'react';
import AppRouter from './Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { useDarkMode } from './hooks/useDarkMode';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppRouter />
        <ThemeSwitcher theme={theme} themeToggler={themeToggler} />
      </>
    </ThemeProvider>
  );
};

export default App;
