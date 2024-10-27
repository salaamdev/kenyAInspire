// src/components/PracticeQuizzes.jsx

import React, { useState, useEffect, useContext } from "react";
import "./componentStyles/PracticeQuizzes.css";
import { getPracticeQuizzes } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function PracticeQuizzes({ grade, subject }) {
  const { token } = useContext(AuthContext);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPracticeQuizzes = async () => {
      try {
        const data = await getPracticeQuizzes(token, grade, subject);
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching practice quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPracticeQuizzes();
  }, [token, grade, subject]);

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
    return <p>Loading practice quizzes...</p>;
  }

  if (questions.length === 0) {
    return <p>No practice quizzes available.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="practice-quizzes">
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
    </div>
  );
}

export default PracticeQuizzes;
