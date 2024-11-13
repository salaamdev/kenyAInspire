import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./InstructorLogin.css";

function InstructorLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    handleLogin({ email, password });
  };

  const handleLogin = async (credentials) => {
    try {
      const user = await login(credentials);
      if (user.role === "teacher") {
        navigate("/instructor/dashboard");
      } else {
        setError("Access denied: You are not an instructor.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="instructor-login">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Instructor Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default InstructorLogin;
