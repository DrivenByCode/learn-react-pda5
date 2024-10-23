// import { useState, useContext } from 'react';
import { useTheme } from '../contexts/themeContext';

export default function ThemeButton({ onChangeTheme }) {
  const contextValue = useTheme();
  // const contextValue = useContext(themeContext);
  console.log('ContextValue', contextValue);

  const { theme, toggleTheme } = contextValue;

  return <button onClick={toggleTheme}>현재 테마: {theme}</button>;
}
