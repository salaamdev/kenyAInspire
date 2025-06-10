import React, { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("medium"); // Options: small, medium, large
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [enableScreenReader, setEnableScreenReader] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion);
  };

  const toggleScreenReader = () => {
    setEnableScreenReader(!enableScreenReader);
  };

  return (
    <UserPreferencesContext.Provider
      value={{ 
        fontSize, 
        highContrast, 
        reduceMotion,
        enableScreenReader,
        toggleHighContrast, 
        changeFontSize,
        toggleReduceMotion,
        toggleScreenReader
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};
