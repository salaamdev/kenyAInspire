import React, { useState, useEffect, createContext } from "react";
import { loginUser } from "../services/api";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    if (data.user.role === "teacher") {
      window.location.href = "/instructor/dashboard";
      return;
    }
    return data.user; // Return the user data
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    // Optional: Validate token or fetch user data on mount
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
