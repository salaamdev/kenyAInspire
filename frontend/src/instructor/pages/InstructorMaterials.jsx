// frontend/src/instructor/pages/InstructorMaterials.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import InstructorNavbar from "../components/InstructorNavbar";
import "./pageStyles/InstructorMaterials.css";

export default function InstructorMaterials() {
  const [lessonPlan, setLessonPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    subject: "",
    grade: "",
    unit: "",
    topic: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/instructor/lesson-plans/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to generate lesson plan");
      }

      setLessonPlan(data.lessonPlan);
    } catch (error) {
      console.error("Error generating lesson plan:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InstructorNavbar />
      <div className="lesson-planner">
        <motion.div
          className="lesson-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>AI Lesson Planner</h1>
          <p>Generate detailed lesson plans powered by AI</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="lesson-form">
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade:</label>
            <input
              type="text"
              id="grade"
              value={formData.grade}
              onChange={(e) =>
                setFormData({ ...formData, grade: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="unit">Unit:</label>
            <input
              type="text"
              id="unit"
              value={formData.unit}
              onChange={(e) =>
                setFormData({ ...formData, unit: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
              type="text"
              id="topic"
              value={formData.topic}
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Lesson Plan"}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Generating lesson plan...</div>}

        {lessonPlan?.content && (
          <motion.div
            className="lesson-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ReactMarkdown>{lessonPlan.content}</ReactMarkdown>
          </motion.div>
        )}
      </div>
    </>
  );
}
