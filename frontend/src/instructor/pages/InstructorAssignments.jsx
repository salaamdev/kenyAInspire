import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import { createAssignment, getAssignments } from "../../services/instructorApi";
import "./InstructorAssignments.css";

function InstructorAssignments() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [assignments, setAssignments] = useState([]);

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    try {
      await createAssignment({ title, dueDate, description });
      alert("Assignment created successfully!");
      fetchAssignments(); // Refresh the list
      // Clear form fields
      setTitle("");
      setDueDate("");
      setDescription("");
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  const fetchAssignments = async () => {
    try {
      const data = await getAssignments();
      setAssignments(data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  // Fetch assignments on component mount
  React.useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      <InstructorNavbar />
      <div className="instructor-assignments">
        <h1>Assignments</h1>
        <div className="assignment-form">
          <h2>Create New Assignment</h2>
          <form onSubmit={handleCreateAssignment}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Due Date:</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Create Assignment</button>
          </form>
        </div>
        <div className="assignments-list">
          <h2>Your Assignments</h2>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id}>
                <p>
                  <strong>{assignment.title}</strong> - Due{" "}
                  {new Date(assignment.dueDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() =>
                    navigate(
                      `/instructor/assignments/${assignment.id}/submissions`
                    )
                  }
                >
                  View Submissions
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstructorAssignments;
