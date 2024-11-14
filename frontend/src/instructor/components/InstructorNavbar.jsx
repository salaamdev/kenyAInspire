// frontend/src/instructor/components/InstructorNavbar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./InstructorNavbar.css"; // Optional: Import CSS if you have any styles

function InstructorNavbar() {
  return (
    <nav className="instructor-nav">
      <ul className="instructor-nav-list">
        <li>
          <NavLink
            to="/instructor/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructor/assignments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Assignments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructor/materials"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Lesson Plan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructor/grades"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Grades
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructor/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default InstructorNavbar;
