import React from "react";
import { Link } from "react-router-dom";
import "./InstructorNavbar.css";

function InstructorNavbar() {
  return (
    <nav className="instructor-nav">
      <Link to="/instructor/dashboard">Dashboard</Link>
      {/* Add other instructor navigation links here */}
    </nav>
  );
}

export default InstructorNavbar;
