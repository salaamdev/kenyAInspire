// frontend/src/instructor/pages/InstructorAssignments.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaExclamationCircle,
} from "react-icons/fa";
import InstructorNavbar from "../components/InstructorNavbar";
import { createAssignment, getAssignments } from "../../services/instructorApi";
import "./pageStyles/InstructorAssignments.css";

export default function InstructorAssignments() {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    subject: "",
    grade: "",
  });

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const data = await getAssignments();
      setAssignments(data.assignments || []);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", selectedFile);
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      await createAssignment(form);
      setShowForm(false);
      fetchAssignments();
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        subject: "",
        grade: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  return (
    <div className="instructor-assignments-page">
      <InstructorNavbar />
      <div className="assignments-container">
        {/* Quick Stats */}
        <div className="assignment-stats">
          <div className="stat-card">
            <h3>Active Assignments</h3>
            <p>
              {
                assignments.filter((a) => new Date(a.dueDate) > new Date())
                  .length
              }
            </p>
          </div>
          <div className="stat-card">
            <h3>Pending Reviews</h3>
            <p>{assignments.filter((a) => !a.graded).length}</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p>{assignments.filter((a) => a.graded).length}</p>
          </div>
        </div>

        {/* Create Assignment Button */}
        <button
          className="create-assignment-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Create New Assignment"}
        </button>

        {/* Assignment Form */}
        {showForm && (
          <div className="assignment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Assignment Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  placeholder="Assignment Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group file-upload">
                  <label className="file-label">
                    <FaCloudUploadAlt />
                    {selectedFile ? selectedFile.name : "Upload Materials"}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Create Assignment
              </button>
            </form>
          </div>
        )}

        {/* Assignments List */}
        <div className="assignments-list">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="assignment-card">
              <div className="assignment-header">
                <h3>{assignment.title}</h3>
                {assignment.status === "active" && (
                  <FaHourglassHalf className="status-icon active" />
                )}
                {assignment.status === "completed" && (
                  <FaCheckCircle className="status-icon completed" />
                )}
                {assignment.status === "overdue" && (
                  <FaExclamationCircle className="status-icon overdue" />
                )}
              </div>
              <div className="assignment-details">
                <p>
                  {assignment.subject} - {assignment.grade}
                </p>
                <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                <p>{assignment.submissionsCount || 0} submissions</p>
              </div>
              <div className="assignment-actions">
                <button
                  onClick={() =>
                    navigate(
                      `/instructor/assignments/${assignment.id}/submissions`
                    )
                  }
                  className="view-btn"
                >
                  View Submissions
                </button>
                <button
                  onClick={() =>
                    navigate(`/instructor/assignments/${assignment.id}/edit`)
                  }
                  className="edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
