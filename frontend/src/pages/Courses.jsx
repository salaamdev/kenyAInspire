import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import {
  FaBook,
  FaLanguage,
  FaGlobeAfrica,
  FaChevronDown,
} from "react-icons/fa";
import "./pageStyles/Courses.css";

function Courses() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setIsMenuOpen(false);
  };

  const handleSubjectClick = (grade, subject) => {
    navigate(
      `/dashboard/books/${encodeURIComponent(grade.grade)}/${encodeURIComponent(
        subject.name
      )}`
    );
  };

  const getSubjectIcon = (subjectName) => {
    switch (subjectName.toLowerCase()) {
      case "english":
        return <FaBook />;
      case "indigenous languages":
      case "indigenous language":
        return <FaLanguage />;
      case "kiswahili":
        return <FaGlobeAfrica />;
      default:
        return <FaBook />;
    }
  };

  return (
    <div className="courses-page">
      <div className={`floating-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div
          className="sidebar-header"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <h3>Grades</h3>
          <FaChevronDown
            className={`dropdown-icon ${isMenuOpen ? "open" : ""}`}
          />
        </div>
        <ul className="grade-list">
          {coursesData.map((gradeItem) => (
            <li
              key={gradeItem.grade}
              onClick={() => handleGradeClick(gradeItem)}
              className={
                selectedGrade && selectedGrade.grade === gradeItem.grade
                  ? "active"
                  : ""
              }
            >
              {gradeItem.grade}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        {selectedGrade ? (
          <div>
            <h2>{selectedGrade.grade} Subjects</h2>
            <div className="subjects-list">
              {selectedGrade.subjects.map((subject) => (
                <div
                  key={subject.name}
                  className="subject-item"
                  onClick={() => handleSubjectClick(selectedGrade, subject)}
                >
                  <div className="subject-icon">
                    {getSubjectIcon(subject.name)}
                  </div>
                  <h3>{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2>Select a Grade to View Subjects</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
