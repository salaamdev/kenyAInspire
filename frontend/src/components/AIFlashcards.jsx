import React, { useEffect, useState } from "react";
import { getFlashcards } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIFlashcards({ courseId }) {
  const { token } = React.useContext(AuthContext);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const data = await getFlashcards(token, courseId);
        setFlashcards(data.flashcards);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };
    fetchFlashcards();
  }, [token, courseId]);

  return (
    <div>
      {flashcards.map((flashcard, index) => (
        <div key={index}>
          <p>
            <strong>Question:</strong> {flashcard.question}
          </p>
          <p>
            <strong>Answer:</strong> {flashcard.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AIFlashcards;
