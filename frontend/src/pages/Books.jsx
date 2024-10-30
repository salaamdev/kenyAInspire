// frontend/src/pages/Books.jsx

import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Use useParams to get grade and subject from URL
import coursesData from "../data/coursesData";
import Lottie from "react-lottie";
import animationData from "../animations/book.json"; // Example Lottie animation JSON
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext"; // Ensure AuthContext is imported
import flashcardsService from "../services/flashcardsService"; // Import Flashcards Service
import "./pageStyles/Courses.css";

function Books() {
  const { grade, subject } = useParams(); // Get grade and subject from URL
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredSubject, setHoveredSubject] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [loadingFlashcards, setLoadingFlashcards] = useState(false);
  const [flashcardError, setFlashcardError] = useState("");
  const { token } = useContext(AuthContext); // Get token from AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    // Find the grade based on URL parameter
    const gradeItem = coursesData.find((g) => g.grade === grade);
    setSelectedGrade(gradeItem);
  }, [grade]);

  const handleGradeClick = (gradeItem) => {
    setSelectedGrade(gradeItem);
    setIsMenuOpen(false);
    navigate(
      `/dashboard/courses/books/${encodeURIComponent(gradeItem.grade)}/`
    );
  };

  const handleSubjectClick = (subject) => {
    navigate(
      `/dashboard/courses/books/${encodeURIComponent(
        grade
      )}/${encodeURIComponent(subject.name)}`
    );
  };

  const toggleFlashcards = async () => {
    if (!flashcards.length) {
      // Fetch flashcards if not already fetched
      setLoadingFlashcards(true);
      setFlashcardError("");
      try {
        // Find the course_id based on grade and subject
        const gradeItem = coursesData.find((g) => g.grade === grade);
        const subjectItem = gradeItem.subjects.find((s) => s.name === subject);
        if (!subjectItem) {
          throw new Error("Subject not found.");
        }

        const courseId = subjectItem.course_id;

        const data = await flashcardsService.getFlashcards(courseId, token);
        setFlashcards(data.flashcards);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
        setFlashcardError(
          error.response?.data?.message || "Failed to load flashcards."
        );
      } finally {
        setLoadingFlashcards(false);
      }
    }
    setShowFlashcards(!showFlashcards);
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!selectedGrade) {
    return <div>Loading...</div>;
  }

  return (
    <div className="books-page">
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
        <h2>{selectedGrade.grade} Subjects</h2>
        <div className="subjects-list">
          {selectedGrade.subjects.map((subjectItem) => (
            <div
              key={subjectItem.name}
              className="subject-item"
              onClick={() => handleSubjectClick(subjectItem)}
              onMouseEnter={() => setHoveredSubject(subjectItem.name)}
              onMouseLeave={() => setHoveredSubject(null)}
            >
              <div className="subject-icon">
                <Lottie
                  options={defaultOptions}
                  height={100}
                  width={100}
                  isStopped={hoveredSubject !== subjectItem.name}
                  isPaused={hoveredSubject !== subjectItem.name}
                />
              </div>
              <h3>{subjectItem.name}</h3>
              {/* Flashcards Button */}
              <button
                className="flashcards-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering subject click
                  toggleFlashcards();
                }}
              >
                {showFlashcards ? "Hide Flashcards" : "Show Flashcards"}
              </button>
            </div>
          ))}
        </div>

        {/* Flashcards Section */}
        {loadingFlashcards && <div>Loading flashcards...</div>}
        {flashcardError && <div className="error">{flashcardError}</div>}
        {showFlashcards && flashcards.length > 0 && (
          <div className="flashcards-section">
            <h2>Flashcards for {subject}</h2>
            <div className="flashcards-list">
              {flashcards.map((fc) => (
                <div key={fc.id} className="flashcard">
                  <div className="flashcard-question">
                    <strong>Q:</strong> {fc.question}
                  </div>
                  <div className="flashcard-answer">
                    <strong>A:</strong> {fc.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
