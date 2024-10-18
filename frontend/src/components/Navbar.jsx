import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/Navbar.css";

function Navbar() {
  const { user, logout } = React.useContext(AuthContext);

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" style={{ color: "#fff" }}>
          Keny<span style={{ color: "red" }}>AI</span>nspire
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
