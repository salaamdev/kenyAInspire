// frontend/src/instructor/components/RecentActivity.jsx
import React from "react";
import "./componentStyles/RecentActivity.css";

function RecentActivity() {
  const staticActivities = [
    {
      id: 1,
      studentName: "James Kimani",
      assignmentTitle: "Kiswahili Insha",
      timestamp: "2024-01-15T14:30:00",
      grade: "85%",
    },
    {
      id: 2,
      studentName: "Faith Wanjiku",
      assignmentTitle: "Mathematics Quiz",
      timestamp: "2024-01-15T13:15:00",
      grade: "92%",
    },
    {
      id: 3,
      studentName: "Brian Odhiambo",
      assignmentTitle: "Biology Lab Report",
      timestamp: "2024-01-15T11:45:00",
      grade: "88%",
    },
    {
      id: 4,
      studentName: "Sarah Muthoni",
      assignmentTitle: "English Essay",
      timestamp: "2024-01-15T10:20:00",
      grade: "90%",
    },
    {
      id: 5,
      studentName: "Daniel Kiprop",
      assignmentTitle: "Chemistry Test",
      timestamp: "2024-01-15T09:00:00",
      grade: "95%",
    },
  ];

  return (
    <div className="recent-activity-widget">
      <h2>Recent Activity</h2>
      <div className="ai-insight">
        <i className="fas fa-robot"></i>
        <p>AI Analysis: Student engagement is 35% higher than last week</p>
      </div>
      <ul className="activity-list">
        {staticActivities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <div className="activity-header">
              <span className="student-name">{activity.studentName}</span>
              <span className="grade">{activity.grade}</span>
            </div>
            <p className="assignment">{activity.assignmentTitle}</p>
            <p className="timestamp">
              {new Date(activity.timestamp).toLocaleString("en-KE")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
