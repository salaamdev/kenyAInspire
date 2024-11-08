import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import Lottie from "react-lottie";
import animationData from "../animations/book.json"; // Example Lottie animation JSON
import { FaChevronDown } from "react-icons/fa";
import "./pageStyles/Courses.css";

function Courses() {
  const defaultGrade = coursesData.find((grade) => grade.grade === "Grade 4");
  const [selectedGrade, setSelectedGrade] = useState(defaultGrade);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredSubject, setHoveredSubject] = useState(null);
  const navigate = useNavigate();

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setIsMenuOpen(false);
  };

  const handleSubjectClick = (grade, subject) => {
    navigate(
      `/dashboard/courses/books/${encodeURIComponent(
        grade.grade
      )}/${encodeURIComponent(subject.name)}`
    );
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="courses-page">
      <div className={`floating-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div
          className="sidebar-header"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <h3>{selectedGrade ? selectedGrade.grade : "Grades"}</h3>
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
                  onMouseEnter={() => setHoveredSubject(subject.name)}
                  onMouseLeave={() => setHoveredSubject(null)}
                >
                  <div className="subject-icon">
                    <Lottie
                      options={defaultOptions}
                      height={100}
                      width={100}
                      isStopped={hoveredSubject !== subject.name}
                      isPaused={hoveredSubject !== subject.name}
                    />
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
