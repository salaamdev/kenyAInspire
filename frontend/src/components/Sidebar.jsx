import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";
import Chatbot from "./Chatbot";
import "./componentStyles/Sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <button
        className={`menu-button ${isOpen ? "open" : ""} ${
          isButtonVisible ? "visible" : "hidden"
        }`}
        onClick={toggleSidebar}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink to="/dashboard" end className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/dashboard/my-courses" className="nav-link">
              My Courses
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/dashboard/settings" className="nav-link">
              Settings
            </NavLink>
          </li>
        </ul>
        <div
          className="chat-bubble"
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        >
          <FaCommentDots size={24} />
          <span>Chat</span>
        </div>
        <Chatbot
          isOpen={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
        />
      </div>
    </>
  );
}

export default Sidebar;
