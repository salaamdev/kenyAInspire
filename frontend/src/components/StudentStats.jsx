// frontend/src/components/StudentStats.jsx
import React from "react";
import "./componentStyles/StudentStats.css";

function StudentStats() {
  const stats = [
    {
      title: "Overall Grade",
      value: "B+",
      trend: "+0.2",
      isPositive: true,
    },
    {
      title: "Attendance",
      value: "95%",
      trend: "+2.1%",
      isPositive: true,
    },
    {
      title: "Assignments",
      value: "28/30",
      trend: "93%",
      isPositive: true,
    },
    {
      title: "Quiz Score",
      value: "85%",
      trend: "-2.3%",
      isPositive: false,
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.title}</h3>
          <div className="stat-value">{stat.value}</div>
          <div
            className={`stat-trend ${
              stat.isPositive ? "trend-up" : "trend-down"
            }`}
          >
            {stat.trend}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentStats;
