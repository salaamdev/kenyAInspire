import React, { useState } from "react";
import "./componentStyles/FlashcardsModal.css";

const sampleFlashcards = [
  { front: "What is the capital of Kenya?", back: "Nairobi" },
  { front: "What is the largest lake in Africa?", back: "Lake Victoria" },
  {
    front: "What is the official language of Kenya?",
    back: "Swahili and English",
  },
];

function FlashcardsModal({ onClose, courseId }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + sampleFlashcards.length) % sampleFlashcards.length
    );
    setIsFlipped(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content flashcards-modal">
        <h2>Flashcards</h2>
        <p>Click on the card to reveal the answer</p>
        <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p>{sampleFlashcards[currentCard].front}</p>
            </div>
            <div className="flashcard-back">
              <p>{sampleFlashcards[currentCard].back}</p>
            </div>
          </div>
        </div>
        <div className="flashcard-controls">
          <button onClick={handlePrevCard}>Previous</button>
          <button onClick={handleNextCard}>Next</button>
        </div>
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default FlashcardsModal;
