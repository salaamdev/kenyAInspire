import React, { createContext, useState } from "react";

// Create the context
export const UserPreferencesContext = createContext();

// Provider component
function UserPreferencesContextProvider({ children }) {
  const [preferences, setPreferences] = useState({
    theme: "light",
    fontSize: "medium",
    accessibilityOptions: {},
  });

  const updatePreferences = (newPreferences) => {
    setPreferences((prev) => ({ ...prev, ...newPreferences }));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export default UserPreferencesContextProvider;
