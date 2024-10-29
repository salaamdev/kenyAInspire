// components/AI/Flashcards.jsx

import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import flashcardsService from "../../services/flashcardsService";
// import "./AI/Flashcards.css"; // Placeholder for styling

function Flashcards({ courseId }) {
  const { token } = useContext(AuthContext);
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      setLoading(true);
      try {
        const response = await flashcardsService.getFlashcards(courseId, token);
        setFlashcards(response.flashcards);
      } catch (err) {
        setError("Failed to load flashcards.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, [courseId, token]);

  const handleGenerateFlashcards = async () => {
    setLoading(true);
    try {
      const response = await flashcardsService.generateFlashcards(
        courseId,
        token
      );
      setFlashcards(response.flashcards);
      setCurrentIndex(0);
      setShowAnswer(false);
    } catch (err) {
      setError("Failed to generate flashcards.");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Loading flashcards...</div>;
  if (error) return <div>{error}</div>;
  if (flashcards.length === 0)
    return (
      <div>
        <p>No flashcards available.</p>
        <button onClick={handleGenerateFlashcards}>Generate Flashcards</button>
      </div>
    );

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="flashcards-container">
      <div className="flashcard">
        <div className="question">{currentFlashcard.question}</div>
        {showAnswer && <div className="answer">{currentFlashcard.answer}</div>}
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <button onClick={handleGenerateFlashcards}>Regenerate Flashcards</button>
    </div>
  );
}

export default Flashcards;
