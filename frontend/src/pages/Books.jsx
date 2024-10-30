import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import { AuthContext } from "../contexts/AuthContext";
import "./pageStyles/Books.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { generateQuiz } from "../services/api";
import Flashcard from "../components/Flashcard"; // Import the Flashcard component

function Books() {
  const { grade, subject } = useParams();
  const decodedGrade = decodeURIComponent(grade);
  const decodedSubject = decodeURIComponent(subject);
  const { token } = useContext(AuthContext);
  const gradeData = coursesData.find(
    (g) => g.grade.toLowerCase() === decodedGrade.toLowerCase()
  );
  const subjectData = gradeData
    ? gradeData.subjects.find(
        (s) => s.name.toLowerCase() === decodedSubject.toLowerCase()
      )
    : null;
  const [selectedSection, setSelectedSection] = useState("Outline");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState([]);
  // const [showQuiz, setShowQuiz] = useState(false); // Define showQuiz state

  if (!gradeData || !subjectData) {
    return (
      <div className="books-page" style={{ padding: "20px" }}>
        <h2>Invalid Grade or Subject</h2>
      </div>
    );
  }

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    if (section === "Flashcard") {
      fetchFlashcards();
    }
    if (section === "Quiz") {
      fetchQuiz(); // Define this function if needed
    }
  };

  const fetchFlashcards = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/flashcards/generate",
        { grade: decodedGrade, subject: decodedSubject },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // If authentication is required
          },
        }
      );
      let flashcardsData = response.data.flashcards || response.data;
      if (!Array.isArray(flashcardsData)) {
        throw new Error("Invalid flashcards format.");
      }
      setFlashcards(flashcardsData);
    } catch (err) {
      console.error(err);
      setError("Failed to load flashcards.");
    } finally {
      setLoading(false);
    }
  };

  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateQuiz(token, decodedGrade, decodedSubject);
      setQuizData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load quiz.");
    } finally {
      setLoading(false);
    }
  };

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
      case "Flashcard":
        if (loading) return <p>Loading flashcards...</p>;
        if (error) return <p>{error}</p>;
        if (flashcards.length === 0) return <p>No Flashcards Available</p>;
        return <Flashcard flashcards={flashcards} />; // Use the Flashcard component
      case "Quiz":
        return <Quiz grade={decodedGrade} subject={decodedSubject} />;
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
        <button onClick={() => handleSectionClick("Flashcard")}>
          Flashcard
        </button>
        <button
          onClick={() => handleSectionClick("Quiz")}
          className="start-quiz-button"
        >
          Start Quiz
        </button>
      </div>
      {/* Bottom Section Content */}
      <div className="books-content">{renderContent()}</div>
    </div>
  );
}

export default Books;
