import React, { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Provider component
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = async (credentials) => {
    // Replace with actual API call
    const mockUser = { id: 1, name: "John Doe" };
    setUser(mockUser);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
