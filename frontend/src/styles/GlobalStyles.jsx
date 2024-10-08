import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyles;
