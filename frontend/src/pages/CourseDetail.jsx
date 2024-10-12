import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail, updateTopicCompletion } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import AIQuiz from "../components/AIQuiz";
import AIFlashcards from "../components/AIFlashcards";

function CourseDetail() {
  const { token } = React.useContext(AuthContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const data = await getCourseDetail(token, courseId);
        console.log("Course Detail Data:", data);
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
      // Update the course data locally
      setCourse((prevCourse) => {
        const updatedTopics = prevCourse.topics.map((topic) => {
          if (topic._id === topicId) {
            return { ...topic, isCompleted };
          }
          return topic;
        });
        return { ...prevCourse, topics: updatedTopics };
      });
      // Update progress
      const completedTopicsCount = course.topics.filter(
        (t) => t.isCompleted
      ).length;
      const totalTopics = course.topics.length;
      const progressPercentage = (completedTopicsCount / totalTopics) * 100;
      setProgress({
        totalTopics,
        completedTopics: completedTopicsCount,
        progressPercentage,
      });
    } catch (error) {
      console.error("Error updating topic completion:", error);
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Progress: {progress.progressPercentage.toFixed(2)}%</h3>
      <h3>Topics</h3>
      <ul>
        {course.topics.map((topic) => (
          <li key={topic._id}>
            <input
              type="checkbox"
              checked={topic.isCompleted}
              onChange={(e) =>
                handleTopicCompletion(topic._id, e.target.checked)
              }
            />
            {topic.title}
            <p>{topic.content}</p>
          </li>
        ))}
      </ul>

      <h3>AI-Generated Flashcards</h3>
      <AIFlashcards courseId={courseId} />

      <h3>Practice Quiz</h3>
      <AIQuiz courseId={courseId} />
    </div>
  );
}

export default CourseDetail;
