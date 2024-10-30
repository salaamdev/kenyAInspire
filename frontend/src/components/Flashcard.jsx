import React, { useState } from "react";
import "./componentStyles/Flashcard.css";

function Flashcard({ flashcards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  if (flashcards.length === 0) {
    return <p>No flashcards available.</p>;
  }

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="flashcards-container">
      <h2>Flashcards</h2>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{currentCard.question}</p>
          </div>
          <div className="flashcard-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevCard}>Previous</button>
        <span>
          {currentCardIndex + 1} / {flashcards.length}
        </span>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
}

export default Flashcard;
