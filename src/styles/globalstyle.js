import { createGlobalStyle } from 'styled-components';

import { theme } from './theme/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%
  }
  body {
    margin: 0 auto;
    padding: 0;
    font-family: ${theme.fonts.family.sansSerif};
    color: ${theme.colors.paragraph};
    background-color: ${theme.colors.background};
    *, *:before, *:after {
        box-sizing: border-box;
    }    a {
        color: inherit;
        text-decoration: none;
    }

  }
`;

export default GlobalStyle;
