import React, { useEffect, useState } from "react";
import { getQuiz } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIQuiz({ courseId }) {
  const { token } = React.useContext(AuthContext);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuiz(token, courseId);
        setQuiz(data.quiz);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchQuiz();
  }, [token, courseId]);

  return (
    <div>
      {quiz.map((q, index) => (
        <div key={index}>
          <p>
            <strong>
              {index + 1}. {q.question}
            </strong>
          </p>
          <ul>
            {q.options.map((option, idx) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
          {/* Implement functionality to select an answer and check correctness */}
        </div>
      ))}
    </div>
  );
}

export default AIQuiz;
