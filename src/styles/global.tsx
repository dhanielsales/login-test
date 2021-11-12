import { css, Global } from '@emotion/react';
import React from 'react';

const globalCss = css`
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    font-size: 100%;

    /* > 1200px = 1rem = 20px 
    @media screen and (min-width: 75em) {
      font-size: 125%;
    } */

    /* < 900px = 1rem = 16px 
    @media screen and (max-width: 56.25em) {
      font-size: 100%;
    } /

    /* < 600px = 1rem = 12px 
    @media screen and (max-width: 37.5em) {
      font-size: 75%;
    } */

    /* < 450px = 1rem = 10px 
    @media screen and (max-width: 28em) {
      font-size: 62.5%;
    } */
  }

  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Black.ttf');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-BlackItalic.ttf');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-BoldItalic.ttf');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Italic.ttf');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Thin.ttf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-ThinItalic.ttf');
    font-weight: 100;
    font-style: italic;
  }
`;

const GlobalStyles = () => <Global styles={globalCss} />;

export default GlobalStyles;
