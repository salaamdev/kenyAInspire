import React, { useEffect, useState } from "react";
import { sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIQuiz({ courseId }) {
  const { token } = React.useContext(AuthContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const message = `Generate a quiz for the course with ID ${courseId}.`;
        const response = await sendMessageToAI(token, message);
        setQuestions(response.reply.split("\n"));
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchQuiz();
  }, [token, courseId]);

  return (
    <div>
      <h3>Quiz</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default AIQuiz;
