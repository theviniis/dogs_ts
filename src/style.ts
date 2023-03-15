import { createGlobalStyle } from 'styled-components';
import { getTypographyStyles } from './components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --type-first: Helvetica, Arial, sans-serif;
      --type-second: 'Spectral', Georgia;
  }
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin-block-start: 4rem;
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.background};
    ${getTypographyStyles('p1')};
  }
  ul, li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button, input, label {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
  }
  a {
    text-decoration: none;
  }
`;
