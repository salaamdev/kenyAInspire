import React, { useState } from "react";
import "./componentStyles/PracticeQuizzesModal.css";

const sampleQuestions = [
  {
    question: "What is the capital of Kenya?",
    options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following is NOT one of Kenya's national languages?",
    options: ["Swahili", "English", "French", "Kikuyu"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest national park in Kenya?",
    options: ["Amboseli", "Tsavo East", "Masai Mara", "Nairobi National Park"],
    correctAnswer: 1,
  },
];

function PracticeQuizzesModal({ onClose, courseId }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % sampleQuestions.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content practice-quizzes-modal">
        <h2>Practice Quiz</h2>
        <div className="question-container">
          <h3>{sampleQuestions[currentQuestion].question}</h3>
          <div className="options-container">
            {sampleQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedAnswer === index ? "selected" : ""
                } ${
                  showResult
                    ? index === sampleQuestions[currentQuestion].correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {!showResult ? (
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </button>
        ) : (
          <button className="next-button" onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PracticeQuizzesModal;
