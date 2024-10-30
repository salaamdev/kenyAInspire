import React, { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("medium"); // Options: small, medium, large
  const [highContrast, setHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  return (
    <UserPreferencesContext.Provider
      value={{ fontSize, highContrast, toggleHighContrast, changeFontSize }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};
