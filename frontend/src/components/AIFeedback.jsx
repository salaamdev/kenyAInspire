// src/components/AIFeedback.jsx

import React, { useState, useContext } from "react";
import "./componentStyles/AIFeedback.css";
import { sendFeedbackRequest } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIFeedback({ courseId }) {
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await sendFeedbackRequest(token, message, file, courseId);
      setFeedback(data.feedback);
    } catch (error) {
      console.error("Error sending feedback request:", error);
      alert("Failed to get AI feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-feedback">
      <h2>AI Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your text here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="feedback-textarea"
        ></textarea>
        <p>OR</p>
        <input
          type="file"
          accept=".txt,.pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Processing..." : "Get Feedback"}
        </button>
      </form>
      {feedback && (
        <div className="feedback-result">
          <h3>AI Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default AIFeedback;
