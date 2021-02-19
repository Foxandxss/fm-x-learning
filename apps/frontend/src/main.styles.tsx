import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    --primary-color: rgba(55, 221, 237);
    --background-color: #1a1916;
    --header-background-1: #5d6766;
    --header-background-2: #626f68;
    --screen-background-1: #4e4b46;
    --screen-background-2: #a39685;
    --footer-background-1: #0a2627;
    --footer-background-2: #1b4738;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: var(--background-color);
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
