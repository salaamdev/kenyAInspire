// frontend/src/components/Recommendations.jsx

import React from "react";
import ReactMarkdown from "react-markdown";
import "./componentStyles/Recommendations.css";

function Recommendations({ markdownContent }) {
  return (
    <div className="recommendations-container">
      <h3>Personalized Recommendations</h3>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default Recommendations;
