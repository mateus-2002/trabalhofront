import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: 400;
    color: #20a2a0;
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #20a2a0;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
