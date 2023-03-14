import React, { useContext } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { DogsContext } from '.';
import { darkTheme, lightTheme } from '../shared';

export interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { scheme } = useContext(DogsContext);

  const themes: Record<'light' | 'dark', DefaultTheme> = {
    light: { ...lightTheme },
    dark: { ...darkTheme },
  };

  return (
    <StyledThemeProvider theme={themes[scheme]}>{children}</StyledThemeProvider>
  );
};
