import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getFailedQuestions, deleteFailedQuestion } from "../services/api";
import "./pageStyles/FailedQuestions.css";

function FailedQuestions() {
  const { token } = useContext(AuthContext);
  const [failedQuestions, setFailedQuestions] = useState([]);

  useEffect(() => {
    fetchFailedQuestions();
  }, []);

  const fetchFailedQuestions = async () => {
    try {
      const data = await getFailedQuestions(token);
      setFailedQuestions(data.failedQuestions);
    } catch (error) {
      console.error("Error fetching failed questions:", error);
    }
  };

  const handleDelete = async (questionId) => {
    try {
      await deleteFailedQuestion(token, questionId);
      setFailedQuestions((prevQuestions) =>
        prevQuestions.filter((q) => q.id !== questionId)
      );
    } catch (error) {
      console.error("Error deleting failed question:", error);
    }
  };

  return (
    <div className="failed-questions-page">
      <h2>Your Incorrectly Answered Questions</h2>
      {failedQuestions.length === 0 ? (
        <p>You have no incorrectly answered questions.</p>
      ) : (
        <ul className="failed-questions-list">
          {failedQuestions.map((question) => (
            <li key={question.id} className="failed-question-item">
              <p>{question.questionText}</p>
              <button onClick={() => handleDelete(question.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FailedQuestions;
