import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaHome,
  FaBook,
  FaCog,
  FaCommentDots,
  FaClipboardList,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import Chatbot from "./Chatbot";
import "./componentStyles/Navbar.css";

function InstructorNavbar() {
  const { user, logout } = React.useContext(AuthContext);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Check if the user is an instructor or a student
  const isInstructor = user?.role === "instructor";

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" style={{ color: "#000" }}>
            Keny<span style={{ color: "red" }}>AI</span>nspire
          </Link>
        </div>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">
                <FaHome />
                <span>Home</span>
              </Link>

              {/* Conditional Links based on user role */}
              {isInstructor ? (
                <>
                  <Link to="/instructor-dashboard/progress" className="nav-link">
                    <FaGraduationCap />
                    <span>Student Progress</span>
                  </Link>
                  <Link to="/instructor-dashboard/courses" className="nav-link">
                    <FaBook />
                    <span>Course Management</span>
                  </Link>
                  <Link to="/instructor-dashboard/lesson-plans" className="nav-link">
                    <FaChalkboardTeacher />
                    <span>Lesson Plans</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard/courses" className="nav-link">
                    <FaBook />
                    <span>Courses</span>
                  </Link>
                  <Link to="/dashboard/failed-questions" className="nav-link">
                    <FaClipboardList />
                    <span>Analytics</span>
                  </Link>
                </>
              )}

              {/* Common Links for both roles */}
              <Link to="/dashboard/settings" className="nav-link">
                <FaCog />
                <span>Settings</span>
              </Link>
              <button onClick={toggleChat} className="nav-link chat-button">
                <FaCommentDots />
                <span>Chat</span>
              </button>
              <button onClick={logout} className="nav-link">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Render the Chatbot component */}
      {isChatOpen && <Chatbot isOpen={isChatOpen} onClose={toggleChat} />}
    </>
  );
}

export default InstructorNavbar;
