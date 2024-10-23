// src/components/AIFeedbackModal.jsx

import React, { useState, useContext } from "react";
import "./componentStyles/AIFeedbackModal.css";
import { sendFeedbackRequest } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIFeedbackModal({ onClose, courseId }) {
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message && !file) {
      alert("Please enter a message or select a file.");
      return;
    }
    setLoading(true);
    try {
      // Send message and file to the backend
      const data = await sendFeedbackRequest(token, message, file, courseId);
      setFeedback([
        ...feedback,
        {
          user: message || file.name,
          ai: data.feedback,
        },
      ]);
      setMessage("");
      setFile(null);
    } catch (error) {
      console.error("Error getting feedback:", error);
      alert("An error occurred while getting feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content ai-feedback-modal">
        <h2>AI Feedback</h2>
        <p>Get feedback on your assignment before you submit it</p>
        <div className="feedback-container">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-item">
              <p className="user-message">{item.user}</p>
              <p className="ai-message">{item.ai}</p>
            </div>
          ))}
          {loading && <p>Loading feedback...</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message or question here..."
            className="message-input"
          ></textarea>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AIFeedbackModal;
