import React, { useState, useEffect } from "react";
import { sendMessageToAI, getCourses, getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/Chatbot.css";

function Chatbot({ isOpen, onClose }) {
  const { token, user } = React.useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState({ courses: [], progress: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!navigator.onLine) {
          const cachedData = JSON.parse(localStorage.getItem("studentData"));
          if (cachedData) {
            setStudentData(cachedData);
          }
        } else {
          const coursesData = await getCourses(token);
          const progressData = await getProgress(token);
          const data = {
            courses: coursesData.courses,
            progress: progressData.progress,
          };
          setStudentData(data);
          localStorage.setItem("studentData", JSON.stringify(data));
        }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue("");

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
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        Chatbot
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? "user" : "ai"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
