import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import UserPreferencesContextProvider from "./contexts/UserPreferencesContext";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/GlobalStyles";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "styled-components"; 

const theme = {
  colors: {
    primary: "#1A73E8", // Blue
    secondary: "#34A853", // Green
    accent: "#FBBC05", // Yellow
    background: "#FFFFFF", // White
    text: "#202124", // Dark Gray
    lightGray: "#F1F3F4",
    darkGray: "#5F6368",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: "600px",
    tablet: "960px",
    desktop: "1280px",
    large: "1920px",
  },
  spacing: (factor) => `${factor * 8}px`, // For consistent spacing
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <AuthContextProvider>
          <UserPreferencesContextProvider>
            <BrowserRouter>
              <GlobalStyles />
              <AppRoutes />
            </BrowserRouter>
          </UserPreferencesContextProvider>
        </AuthContextProvider>
      </ErrorBoundary>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
