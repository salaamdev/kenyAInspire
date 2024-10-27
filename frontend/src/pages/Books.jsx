// src/pages/Books.jsx

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import PracticeQuizzes from "../components/PracticeQuizzes";
import AIFeedback from "../components/AIFeedback";
import Flashcards from "../components/Flashcards";
import { AuthContext } from "../contexts/AuthContext";
import { getCourseDetail, updateTopicCompletion } from "../services/api";
import "./pageStyles/Books.css";

function Books() {
  const { grade, subject } = useParams();
  const decodedGrade = decodeURIComponent(grade);
  const decodedSubject = decodeURIComponent(subject);
  const { token } = useContext(AuthContext);

  // Find the grade and subject data
  const gradeData = coursesData.find(
    (g) => g.grade.toLowerCase() === decodedGrade.toLowerCase()
  );
  const subjectData = gradeData
    ? gradeData.subjects.find(
        (s) => s.name.toLowerCase() === decodedSubject.toLowerCase()
      )
    : null;

  const [selectedSection, setSelectedSection] = useState("Outline");
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);

  // Fetch course details (if needed)
  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        if (subjectData) {
          const data = await getCourseDetail(token, subjectData.id);
          setCourse(data.course);
          setProgress(data.progress);
        }
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };
    fetchCourseDetail();
  }, [token, subjectData]);

  if (!gradeData || !subjectData) {
    return (
      <div className="books-page" style={{ padding: "20px" }}>
        <h2>Invalid Grade or Subject</h2>
      </div>
    );
  }

  // Handlers for top section navigation
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleTopicCompletion = async (topicId, isCompleted) => {
    try {
      await updateTopicCompletion(token, subjectData.id, topicId, isCompleted);
      // Update course and progress state as needed...
    } catch (error) {
      console.error("Error updating topic completion:", error);
    }
  };

  // Render content based on selected section
  const renderContent = () => {
    switch (selectedSection) {
      case "Outline":
        return subjectData.outline ? (
          <embed
            src={subjectData.outline}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <p>No Outline Available</p>
        );
      case "Ebook":
        return subjectData.ebook ? (
          <embed
            src={subjectData.ebook}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <p>No Ebook Available</p>
        );
      // case "AI Practice Quiz":
      //   return <PracticeQuizzes courseId={subjectData.id} />;
      case "AI Practice Quiz":
        return (
          <PracticeQuizzes grade={decodedGrade} subject={decodedSubject} />
        );
      case "AI Feedback":
        return <AIFeedback courseId={subjectData.id} />;
      case "AI Flashcard":
        return <Flashcards courseId={subjectData.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="books-page" style={{ padding: "20px" }}>
      <h2>
        {decodedGrade} - {decodedSubject}
      </h2>

      {/* Top Section Navigation */}
      <div className="books-navigation" style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleSectionClick("Outline")}
          style={{ marginRight: "10px" }}
        >
          Outline
        </button>
        <button
          onClick={() => handleSectionClick("Ebook")}
          style={{ marginRight: "10px" }}
        >
          Ebook
        </button>
        <button
          onClick={() => handleSectionClick("AI Practice Quiz")}
          style={{ marginRight: "10px" }}
        >
          AI Practice Quiz
        </button>
        <button
          onClick={() => handleSectionClick("AI Feedback")}
          style={{ marginRight: "10px" }}
        >
          AI Feedback
        </button>
        <button onClick={() => handleSectionClick("AI Flashcard")}>
          AI Flashcard
        </button>
      </div>

      {/* Bottom Section Content */}
      <div className="books-content">{renderContent()}</div>
    </div>
  );
}

export default Books;
