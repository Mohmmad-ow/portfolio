// hooks/useAppContext.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

export const useAppContext = () => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);
  
  if (!theme || !language) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  
  return { ...theme, ...language };
};