import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail, updateTopicCompletion } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import AIQuiz from "../components/AIQuiz";
import AIFlashcards from "../components/AIFlashcards";
import "./pageStyles/CourseDetails.css";

function CourseDetails() {
  const { token } = React.useContext(AuthContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);

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

        <div className="ai-tools">
          <div className="ai-section">
            <h3>AI Flashcards</h3>
            <AIFlashcards courseId={courseId} />
          </div>
          <div className="ai-section">
            <h3>AI Practice Quiz</h3>
            <AIQuiz courseId={courseId} />
          </div>
          <div className="ai-section">
            <h3>AI Feedback</h3>
            <AIQuiz courseId={courseId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
