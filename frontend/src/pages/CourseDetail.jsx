import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail, sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import AIQuiz from "../components/AIQuiz";
import AIFlashcards from "../components/AIFlashcards";

function CourseDetail() {
  const { token } = React.useContext(AuthContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [resources, setResources] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const data = await getCourseDetail(token, courseId);
        setCourse(data.course);
        setResources(data.resources);
        setAssignments(data.assignments);
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };
    fetchCourseDetail();
  }, [token, courseId]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Resources</h3>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.url} download>
              {resource.name}
            </a>
          </li>
        ))}
      </ul>

      <h3>Assignments</h3>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            {assignment.title}
            {/* Additional assignment details */}
          </li>
        ))}
      </ul>

      <h3>AI Quiz Practice</h3>
      <AIQuiz courseId={courseId} />

      <h3>AI-Generated Flashcards</h3>
      <AIFlashcards courseId={courseId} />
    </div>
  );
}

export default CourseDetail;
