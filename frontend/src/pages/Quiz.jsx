import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { generateQuiz, recordAnswer } from "../services/api";
import "./pageStyles/Quiz.css";

function Quiz({ grade, subject }) {
  const decodedGrade = grade;
  const decodedSubject = subject;
  const { token } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const data = await generateQuiz(token, decodedGrade, decodedSubject);
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestion.id];

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    recordAnswer(token, currentQuestion.id, isCorrect).catch((error) =>
      console.error("Error recording answer:", error)
    );

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  if (quizFinished) {
    const correctCount = questions.reduce((total, question) => {
      const userAnswer = userAnswers[question.id];
      return total + (userAnswer === question.correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="quiz-results">
        <h2>Quiz Completed!</h2>
        <p>
          You answered {correctCount} out of {questions.length} questions
          correctly.
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>
        {decodedGrade} - {decodedSubject} Quiz
      </h2>
      <div className="quiz-question">
        <p>
          {currentQuestionIndex + 1}. {currentQuestion.questionText}
        </p>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => {
            const optionLabel = String.fromCharCode(65 + index); // 'A', 'B', 'C', 'D'
            return (
              <div key={index} className="quiz-option">
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={optionLabel}
                    checked={userAnswers[currentQuestion.id] === optionLabel}
                    onChange={() =>
                      handleOptionChange(currentQuestion.id, optionLabel)
                    }
                  />
                  {optionLabel}. {option}
                </label>
              </div>
            );
          })}
        </div>
        <button onClick={handleNext}>
          {currentQuestionIndex + 1 < questions.length ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
