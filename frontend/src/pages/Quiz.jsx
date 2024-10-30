import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { generateQuiz, recordAnswer } from "../services/api";
import "./pageStyles/Quiz.css";

function Quiz({ grade, subject }) {
  const { token } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const data = await generateQuiz(token, grade, subject);
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleOptionClick = (optionLabel) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(optionLabel);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer && !isAnswerSubmitted) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

      recordAnswer(token, currentQuestion.id, isCorrect).catch((error) =>
        console.error("Error recording answer:", error)
      );

      setIsAnswerSubmitted(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  if (quizFinished) {
    return (
      <div className="quiz-results">
        <h2>Quiz Completed!</h2>
        <p>
          You answered {score} out of {questions.length} questions correctly.
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>Practice Questions</h2>
      <div className="quiz-question">
        <p>
          {currentQuestionIndex + 1}. {currentQuestion.questionText}
        </p>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => {
            const optionLabel = String.fromCharCode(65 + index); // 'A', 'B', 'C', 'D'
            return (
              <div
                key={index}
                className={`quiz-option ${
                  selectedAnswer === optionLabel ? "selected" : ""
                } ${
                  isAnswerSubmitted
                    ? optionLabel === currentQuestion.correctAnswer
                      ? "correct"
                      : selectedAnswer === optionLabel
                      ? "incorrect"
                      : ""
                    : ""
                }`}
                onClick={() => handleOptionClick(optionLabel)}
              >
                <span className="option-label">{optionLabel}</span>
                <span className="option-text">{option}</span>
              </div>
            );
          })}
        </div>
        {!isAnswerSubmitted ? (
          <button onClick={handleSubmit} disabled={!selectedAnswer}>
            Submit Answer
          </button>
        ) : (
          <button onClick={handleNext}>
            {currentQuestionIndex + 1 < questions.length
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
