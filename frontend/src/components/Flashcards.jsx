// src/components/Flashcards.jsx

import React, { useState, useEffect, useContext } from "react";
import "./componentStyles/Flashcards.css";
import { getFlashcards } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function Flashcards({ courseId }) {
  const { token } = useContext(AuthContext);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const data = await getFlashcards(token, courseId);
        setFlashcards(data.flashcards);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFlashcards();
  }, [token, courseId]);

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
    setIsFlipped(false);
  };

  if (loading) {
    return <p>Loading flashcards...</p>;
  }

  if (flashcards.length === 0) {
    return <p>No flashcards available.</p>;
  }

  return (
    <div className="flashcards">
      <h2>Flashcards</h2>
      <p>Click on the card to reveal the answer</p>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{flashcards[currentCard].question}</p>
          </div>
          <div className="flashcard-back">
            <p>{flashcards[currentCard].answer}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
}

export default Flashcards;
