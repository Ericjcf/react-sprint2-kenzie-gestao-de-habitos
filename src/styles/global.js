import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  :root {

    /*green pallet*/
    --green-1: #027373;
    --green-2: #5FE1C9;

    /*gray pallet*/
    --gray-1: #434334;
    --gray-2: #565B65;
    --gray-3: #DADADA;
    --gray-4: #D9D9D9;
    --gray-5: #E8E8E8;
    --gray-6: #EAEAEA;

    /*black pallet*/
    --black-1: #000000;
    --black-2: #1A202C;

    /*link*/
    --blue-link: #2B6CB0;

    /*error*/
    --red-error: #C41431;

    /* gradient pallet */
    --gradient-dark: #2A9898;
    --gradient-light: #5FE1C9;
  }

  body {
    background-color: var(--gray-6);
  }

  button {
    cursor: pointer;
  }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Share Tech', sans-serif;
  }

  label {
    font-family: 'Share Tech Mono', monospace;
  }

`;
