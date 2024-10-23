import React, { useState } from "react";
import "./componentStyles/AIFeedbackModal.css";

function AIFeedbackModal({ onClose, courseId }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating AI feedback
    setFeedback([
      ...feedback,
      {
        user: message,
        ai: "Thank you for your submission. I'm analyzing your work and will provide feedback shortly.",
      },
    ]);
    setMessage("");
    setFile(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content ai-feedback-modal">
        <h2>AI Feedback</h2>
        <p>Get feedback on your assignment before you submit them</p>
        <div className="feedback-container">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-item">
              <p className="user-message">{item.user}</p>
              <p className="ai-message">{item.ai}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
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
