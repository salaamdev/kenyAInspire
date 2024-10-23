// src/components/PracticeQuizzesModal.jsx

import React, { useState, useEffect, useContext } from "react";
import "./componentStyles/PracticeQuizzesModal.css";
import { getPracticeQuizzes } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function PracticeQuizzesModal({ onClose, courseId }) {
  const { token } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPracticeQuizzes = async () => {
      try {
        const data = await getPracticeQuizzes(token, courseId);
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching practice quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPracticeQuizzes();
  }, [token, courseId]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="modal-content practice-quizzes-modal">
          <p>Loading practice quizzes...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="modal-overlay">
        <div className="modal-content practice-quizzes-modal">
          <p>No practice quizzes available.</p>
          <button className="close-modal" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="modal-overlay">
      <div className="modal-content practice-quizzes-modal">
        <h2>Practice Quiz</h2>
        <div className="question-container">
          <h3>{currentQuestion.question}</h3>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedAnswer === index ? "selected" : ""
                } ${
                  showResult
                    ? index === currentQuestion.correctAnswer
                      ? "correct"
                      : selectedAnswer === index
                      ? "incorrect"
                      : ""
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
