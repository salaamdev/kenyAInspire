import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaCommentDots,
} from "react-icons/fa";
import Chatbot from "../../components/Chatbot";
import "./componentStyles/InstructorNavbar.css";

export default function InstructorNavbar() {
  const { logout } = useContext(AuthContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <nav className="instructor-nav">
        <div className="logo">
          <Link to="/instructor/dashboard">
            Keny<span>AI</span>nspire Instructor
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to="/instructor/dashboard" className="nav-link">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/instructor/assignments" className="nav-link">
            <FaBook />
            <span>Assignments</span>
          </NavLink>
          <NavLink to="/instructor/materials" className="nav-link">
            <FaClipboardList />
            <span>Lesson Plan</span>
          </NavLink>
          <NavLink to="/instructor/grades" className="nav-link">
            <FaClipboardList />
            <span>Grades</span>
          </NavLink>
          <NavLink to="/instructor/settings" className="nav-link">
            <FaCog />
            <span>Settings</span>
          </NavLink>
          <button onClick={toggleChat} className="nav-link chat-button">
            <FaCommentDots />
            <span>Chat</span>
          </button>
          <button onClick={logout} className="nav-link logout-button">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </nav>
      {isChatOpen && <Chatbot isOpen={isChatOpen} onClose={toggleChat} />}
    </>
  );
}
