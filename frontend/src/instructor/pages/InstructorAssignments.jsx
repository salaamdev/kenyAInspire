import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import { createAssignment, getAssignments } from "../../services/instructorApi";
import "./pageStyles/InstructorAssignments.css";
export default function InstructorAssignments() {
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
      fetchAssignments();
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

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="instructor-assignments-page">
      <InstructorNavbar />
      <div className="instructor-assignments-container">
        <h1 className="page-title">Assignments</h1>
        <div className="assignment-form">
          <h2>Create New Assignment</h2>
          <form onSubmit={handleCreateAssignment}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Create Assignment
            </button>
          </form>
        </div>
        <div className="assignments-list">
          <h2>Your Assignments</h2>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id} className="assignment-item">
                <h3>{assignment.title}</h3>
                <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                <button
                  onClick={() =>
                    navigate(
                      `/instructor/assignments/${assignment.id}/submissions`
                    )
                  }
                  className="view-submissions-button"
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
