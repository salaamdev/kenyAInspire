// src/components/Books.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import "./pageStyles/Books.css";

function Books() {
  const { grade, subject } = useParams();
  const decodedGrade = decodeURIComponent(grade);
  const decodedSubject = decodeURIComponent(subject);

  // Find the grade and subject data
  const gradeData = coursesData.find((g) => g.grade === decodedGrade);
  const subjectData = gradeData
    ? gradeData.subjects.find((s) => s.name === decodedSubject)
    : null;

  const [selectedSection, setSelectedSection] = useState("Outline");

  if (!gradeData || !subjectData) {
    return (
      <div className="books-page" style={{ padding: "20px" }}>
        <h2>Invalid Grade or Subject</h2>
      </div>
    );
  }

  // Handlers for top section navigation
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Render content based on selected section
  const renderContent = () => {
    switch (selectedSection) {
      case "Outline":
        return (
          <embed
            src={subjectData.outline}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        );
      case "Ebook":
        return (
          <embed
            src={subjectData.ebook}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        );
      case "AI Practice Quiz":
        return (
          <div>
            <h3>AI Practice Quiz</h3>
            {/* Implement AI Practice Quiz functionality here */}
            <p>This feature is under development.</p>
          </div>
        );
      case "AI Feedback":
        return (
          <div>
            <h3>AI Feedback</h3>
            {/* Implement AI Feedback functionality here */}
            <p>This feature is under development.</p>
          </div>
        );
      case "AI Flashcard":
        return (
          <div>
            <h3>AI Flashcard</h3>
            {/* Implement AI Flashcard functionality here */}
            <p>This feature is under development.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="books-page" style={{ padding: "20px" }}>
      <h2>
        {decodedGrade} - {decodedSubject}
      </h2>

      {/* Top Section Navigation */}
      <div className="books-navigation" style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleSectionClick("Outline")}
          style={{ marginRight: "10px" }}
        >
          Outline
        </button>
        <button
          onClick={() => handleSectionClick("Ebook")}
          style={{ marginRight: "10px" }}
        >
          Ebook
        </button>
        <button
          onClick={() => handleSectionClick("AI Practice Quiz")}
          style={{ marginRight: "10px" }}
        >
          AI Practice Quiz
        </button>
        <button
          onClick={() => handleSectionClick("AI Feedback")}
          style={{ marginRight: "10px" }}
        >
          AI Feedback
        </button>
        <button onClick={() => handleSectionClick("AI Flashcard")}>
          AI Flashcard
        </button>
      </div>

      {/* Bottom Section Content */}
      <div className="books-content">{renderContent()}</div>
    </div>
  );
}

export default Books;
