import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaCog, FaCommentDots } from "react-icons/fa";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className="nav-link"
              onClick={toggleSidebar}
            >
              <FaHome /> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-courses"
              className="nav-link"
              onClick={toggleSidebar}
            >
              <FaBook /> <span>My Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className="nav-link"
              onClick={toggleSidebar}
            >
              <FaCog /> <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="chat-button">
        <FaCommentDots /> <span>Chat</span>
      </button>
    </aside>
  );
}
