import { createGlobalStyle } from "styled-components";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${({ fontSize }) => {
      switch (fontSize) {
        case "small":
          return "14px";
        case "large":
          return "18px";
        default:
          return "16px";
      }
    }};
    background-color: ${({ highContrast }) => (highContrast ? "#000" : "#fff")};
    color: ${({ highContrast }) => (highContrast ? "#fff" : "#000")};
  }
`;

export default (props) => (
  <UserPreferencesContext.Consumer>
    {({ fontSize, highContrast }) => (
      <GlobalStyle fontSize={fontSize} highContrast={highContrast} {...props} />
    )}
  </UserPreferencesContext.Consumer>
);
