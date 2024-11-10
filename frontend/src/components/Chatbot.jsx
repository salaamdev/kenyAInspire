// src/components/Chatbot.jsx

import React, { useState, useEffect, useRef } from "react";
import { sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaPaperPlane,
  FaTimes,
  FaRobot,
  FaUser,
  FaMicrophone,
  FaVolumeUp,
} from "react-icons/fa";
import "./componentStyles/Chatbot.css";

function Chatbot({ isOpen, onClose }) {
  const { token, user } = React.useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState({ courses: [] });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check if Speech Recognition API is supported
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Sorry, your browser does not support speech recognition.");
    }
  }, []);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const coursesData = await getCourses(token);
    //     const data = {
    //       courses: coursesData.courses,
    //     };
    //     setStudentData(data);
    //     setMessages([
    //       {
    //         text: `Hello ${user.name}! How can I assist you today?`,
    //         isUser: false,
    //       },
    //     ]);
    //   } catch (error) {
    //     console.error("Error fetching student data:", error);
    //   }
    // };
    // fetchData();
  }, [token, user.name]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Text-to-Speech function
  const handleSpeak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  // Speech-to-Text (Speech Recognition)
  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      if (!recognitionRef.current) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onstart = () => {
          setIsRecording(true);
        };

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputValue((prev) => prev + " " + transcript);
        };

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsRecording(false);

          // Provide user-friendly feedback based on the error type
          switch (event.error) {
            case "network":
              console.log(
                "Network error: Please check your internet connection."
              );
              break;
            case "no-speech":
              console.log("No speech detected: Please try speaking again.");
              break;
            case "audio-capture":
              console.log("Audio capture error: Please check your microphone.");
              break;
            default:
              console.log(
                "An error occurred with speech recognition. Please try again."
              );
          }
        };

        recognitionRef.current.onend = () => {
          setIsRecording(false);
        };
      }

      if (isRecording) {
        recognitionRef.current.stop();
      } else {
        recognitionRef.current.start();
      }
    } else {
      alert("Sorry, your browser does not support speech recognition.");
    }
  };

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
        <span>AI Assistant</span>
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
            <div className="message-bubble">
              <span className="message-text">{msg.text}</span>
            </div>
            <button
              className="text-to-speech-button"
              aria-label="Read message aloud"
              onClick={() => handleSpeak(msg.text)}
            >
              <FaVolumeUp />
            </button>
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
        <button
          type="button"
          className={`microphone-button ${isRecording ? "recording" : ""}`}
          aria-label="Use voice input"
          onClick={handleVoiceInput}
        >
          <FaMicrophone />
        </button>
        <button type="submit" className="send-button" aria-label="Send message">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
