import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    margin-block-start: 4rem;
    color: #333;
    font-family: var(--type-first);
  }
  ul, li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
  }
  a {
    text-decoration: none;
  }
`;
