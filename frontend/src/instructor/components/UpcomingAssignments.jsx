// frontend/src/instructor/components/UpcomingAssignments.jsx
import React, { useEffect, useState } from "react";
import { getUpcomingAssignments } from "../../services/instructorApi";
import "./UpcomingAssignments.css";

function UpcomingAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUpcomingAssignments();
  }, []);

  const fetchUpcomingAssignments = async () => {
    try {
      const response = await getUpcomingAssignments();
      // Handle both possible response structures
      setAssignments(response?.assignments || response?.data || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching upcoming assignments:", error);
      setError("Failed to load assignments");
      setAssignments([]);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="upcoming-assignments-widget">
      <h2>Upcoming Assignments</h2>
      {assignments.length === 0 ? (
        <p>No upcoming assignments</p>
      ) : (
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <p>
                <strong>{assignment.title}</strong> due on{" "}
                {new Date(assignment.dueDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UpcomingAssignments;
