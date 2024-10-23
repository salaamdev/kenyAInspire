import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail, updateTopicCompletion } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import FlashcardsModal from "../components/FlashcardsModal";
import AIFeedbackModal from "../components/AIFeedbackModal";
import PracticeQuizzesModal from "../components/PracticeQuizzesModal";
import { FaLightbulb, FaRobot, FaQuestionCircle } from "react-icons/fa";
import "./pageStyles/CourseDetails.css";

function CourseDetails() {
  const { token } = React.useContext(AuthContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const data = await getCourseDetail(token, courseId);
        setCourse(data.course);
        setProgress(data.progress);
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };
    fetchCourseDetail();
  }, [token, courseId]);

  const handleTopicCompletion = async (topicId, isCompleted) => {
    try {
      await updateTopicCompletion(token, courseId, topicId, isCompleted);
      const updatedTopics = course.topics.map((topic) => {
        if (topic.id === topicId) {
          return { ...topic, isCompleted };
        }
        return topic;
      });

      const completedTopicsCount = updatedTopics.filter(
        (t) => t.isCompleted
      ).length;
      const totalTopics = updatedTopics.length;
      const progressPercentage = (completedTopicsCount / totalTopics) * 100;

      setCourse({ ...course, topics: updatedTopics });
      setProgress({
        totalTopics,
        completedTopics: completedTopicsCount,
        progressPercentage,
      });
    } catch (error) {
      console.error("Error updating topic completion:", error);
    }
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  if (!course || !progress) return <p className="loading">Loading...</p>;

  return (
    <div className="course-details">
      <div className="course-header">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <div className="progress-container">
          <div className="progress-label">
            Progress: {progress.progressPercentage.toFixed(2)}%
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress.progressPercentage}%` }}
              aria-valuenow={progress.progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="header-buttons">
          <button
            onClick={() => openModal("practiceQuizzes")}
            className="header-button"
          >
            <FaQuestionCircle /> Practice Quizzes
          </button>
          <button
            onClick={() => openModal("flashcards")}
            className="header-button"
          >
            <FaLightbulb /> Flashcards
          </button>
          <button
            onClick={() => openModal("aiFeedback")}
            className="header-button"
          >
            <FaRobot /> AI Feedback
          </button>
        </div>
      </div>

      <div className="course-content">
        <div className="topics-list">
          <h3>Topics</h3>
          {course.topics.map((topic) => (
            <div key={topic.id} className="topic-item">
              <label className="topic-checkbox">
                <input
                  type="checkbox"
                  checked={topic.isCompleted}
                  onChange={(e) =>
                    handleTopicCompletion(topic.id, e.target.checked)
                  }
                />
                <span className="checkmark"></span>
              </label>
              <div className="topic-content">
                <h4>{topic.title}</h4>
                <p>{topic.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal === "flashcards" && (
        <FlashcardsModal onClose={closeModal} courseId={courseId} />
      )}
      {activeModal === "aiFeedback" && (
        <AIFeedbackModal onClose={closeModal} courseId={courseId} />
      )}
      {activeModal === "practiceQuizzes" && (
        <PracticeQuizzesModal onClose={closeModal} courseId={courseId} />
      )}
    </div>
  );
}

export default CourseDetails;
