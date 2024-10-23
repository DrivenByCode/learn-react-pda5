import { createContext, useState, useContext, useCallback } from 'react';

export const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <>
      <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>
    </>
  );
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(themeContext);
  return { theme, toggleTheme };
}
