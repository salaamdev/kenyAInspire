import React, { useEffect, useState } from "react";
import { sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function AIFlashcards({ courseId }) {
  const { token } = React.useContext(AuthContext);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const message = `Generate flashcards for the course with ID ${courseId}.`;
        const response = await sendMessageToAI(token, message);
        setFlashcards(response.reply.split("\n"));
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };
    fetchFlashcards();
  }, [token, courseId]);

  return (
    <div>
      <h3>Flashcards</h3>
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={index}>{flashcard}</li>
        ))}
      </ul>
    </div>
  );
}

export default AIFlashcards;
