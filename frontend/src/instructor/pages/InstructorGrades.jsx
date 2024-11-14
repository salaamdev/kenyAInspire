// frontend/src/instructor/pages/InstructorGrades.jsx

import React, { useState } from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import { Bar, Line } from "react-chartjs-2";
import "./pageStyles/InstructorGrades.css";

function InstructorGrades() {
  const [selectedClass, setSelectedClass] = useState("Form 1A");
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");

  const classes = ["Form 1A", "Form 1B", "Form 2A", "Form 2B"];
  const subjects = [
    "Mathematics",
    "English",
    "Kiswahili",
    "Science",
    "Social Studies",
  ];

  const studentsData = {
    "Form 1A": [
      {
        id: 1,
        name: "James Kimani",
        grades: {
          Mathematics: 85,
          English: 78,
          Kiswahili: 82,
          Science: 76,
          "Social Studies": 88,
        },
      },
      {
        id: 2,
        name: "Faith Wanjiku",
        grades: {
          Mathematics: 92,
          English: 85,
          Kiswahili: 89,
          Science: 90,
          "Social Studies": 85,
        },
      },
      {
        id: 3,
        name: "Brian Odhiambo",
        grades: {
          Mathematics: 78,
          English: 80,
          Kiswahili: 85,
          Science: 82,
          "Social Studies": 79,
        },
      },
      // Add more students...
    ],
  };

  const trendData = {
    labels: ["Term 1", "Term 2", "Term 3"],
    datasets: [
      {
        label: "Class Average",
        data: [72.5, 75.8, 78.3],
        borderColor: "#2563eb",
        fill: false,
      },
    ],
  };

  const distributionData = {
    labels: [
      "A (80-100%)",
      "B (65-79%)",
      "C (50-64%)",
      "D (40-49%)",
      "E (0-39%)",
    ],
    datasets: [
      {
        data: [25, 40, 20, 10, 5],
        backgroundColor: [
          "#059669",
          "#3b82f6",
          "#eab308",
          "#f97316",
          "#dc2626",
        ],
      },
    ],
  };

  return (
    <div className="grades-page">
      <InstructorNavbar />
      <div className="grades-container">
        <div className="grades-header">
          <h1>Student Grades</h1>
          <div className="filters">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grades-grid">
          <div className="grades-table-section">
            <h2>Student Grades - {selectedClass}</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Current Grade</th>
                    <th>Previous Grade</th>
                    <th>Improvement</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsData[selectedClass].map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.grades[selectedSubject]}%</td>
                      <td>{student.grades[selectedSubject] - 5}%</td>
                      <td className="improvement positive">+5%</td>
                      <td>
                        <button className="edit-grade-btn">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grades-charts">
            <div className="chart-container">
              <h3>Performance Trend</h3>
              <Line
                data={trendData}
                options={{
                  scales: { y: { min: 0, max: 100 } },
                }}
              />
            </div>

            <div className="chart-container">
              <h3>Grade Distribution</h3>
              <Bar data={distributionData} />
            </div>
          </div>

          <div className="quick-insights">
            <div className="insight-card">
              <h3>Class Average</h3>
              <p className="highlight">78.3%</p>
              <span className="trend positive">↑ 2.5%</span>
            </div>
            <div className="insight-card">
              <h3>Top Performer</h3>
              <p>Faith Wanjiku</p>
              <span className="score">92%</span>
            </div>
            <div className="insight-card">
              <h3>Needs Support</h3>
              <p>3 Students</p>
              <span className="text-small">Below 50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorGrades;
