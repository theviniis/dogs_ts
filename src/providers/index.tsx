import React, { createContext, useState } from 'react';
import { ThemeProvider } from './ThemeProvider';

export interface GlobalContextProps {
  scheme: 'light' | 'dark';
  themeToggle: () => void;
}

export const DogsContext = createContext<GlobalContextProps>({
  scheme: 'light',
  themeToggle: () => {},
});

export const DogsProvider = ({ children }: { children: JSX.Element }) => {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light');

  function themeToggle() {
    if (scheme === 'light') {
      setScheme('dark');
    } else {
      return;
    }
  }
  return (
    <DogsContext.Provider value={{ scheme, themeToggle }}>
      <ThemeProvider>{children}</ThemeProvider>
    </DogsContext.Provider>
  );
};
