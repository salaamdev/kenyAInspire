import React, { useState, useEffect, useRef } from "react";
import { sendMessageToAI, getCourses, getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { FaPaperPlane, FaTimes, FaRobot, FaUser } from "react-icons/fa";
import "./componentStyles/Chatbot.css";

function Chatbot({ isOpen, onClose }) {
  const { token, user } = React.useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState({ courses: [], progress: [] });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCourses(token);
        const progressData = await getProgress(token);
        const data = {
          courses: coursesData.courses,
          progress: progressData.progress,
        };
        setStudentData(data);
        setMessages([
          {
            text: `Hello ${user.name}! How can I assist you today?`,
            isUser: false,
          },
        ]);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchData();
  }, [token, user.name]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await sendMessageToAI(token, inputValue, studentData);
      const aiMessage = { text: response.reply, isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      const errorMessage = {
        text: "Sorry, I am having trouble responding.",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <FaRobot className="chatbot-icon" />
        <span>
          Your Virtual <span style={{ color: "red" }}>AI</span> Assistant
        </span>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close chatbot"
        >
          <FaTimes />
        </button>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? "user" : "ai"}`}>
            {msg.isUser ? (
              <FaUser className="message-icon" />
            ) : (
              <FaRobot className="message-icon" />
            )}
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="message ai">
            <FaRobot className="message-icon" />
            <div className="message-bubble typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
          aria-label="Type your message"
        />
        <button type="submit" className="send-button" aria-label="Send message">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
