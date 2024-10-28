// src/pages/Books.jsx

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import { AuthContext } from "../contexts/AuthContext";
import "./pageStyles/Books.css";

function Books() {
  const { grade, subject } = useParams();
  const decodedGrade = decodeURIComponent(grade);
  const decodedSubject = decodeURIComponent(subject);
  const { token } = useContext(AuthContext);

  // Find the grade and subject data
  const gradeData = coursesData.find(
    (g) => g.grade.toLowerCase() === decodedGrade.toLowerCase()
  );
  const subjectData = gradeData
    ? gradeData.subjects.find(
        (s) => s.name.toLowerCase() === decodedSubject.toLowerCase()
      )
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
        return subjectData.outline ? (
          <embed
            src={subjectData.outline}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <p>No Outline Available</p>
        );
      case "Ebook":
        return subjectData.ebook ? (
          <embed
            src={subjectData.ebook}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <p>No Ebook Available</p>
        );
      default:
        return <p>Select a section to view content</p>;
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
      </div>

      {/* Bottom Section Content */}
      <div className="books-content">{renderContent()}</div>
    </div>
  );
}

export default Books;
