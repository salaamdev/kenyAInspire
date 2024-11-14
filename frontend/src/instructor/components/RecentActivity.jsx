// frontend/src/instructor/components/RecentActivity.jsx

import React, { useEffect, useState } from "react";
import { getRecentActivity } from "../../services/instructorApi";
import "./RecentActivity.css";

function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  const fetchRecentActivity = async () => {
    try {
      const data = await getRecentActivity();
      setActivities(data.activities);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error fetching recent activity");
      console.error("Error fetching recent activity:", error);
    }
  };

  return (
    <div className="recent-activity-widget">
      <h2>Recent Activity</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : activities.length > 0 ? (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <p>
                <strong>{activity.studentName}</strong> submitted{" "}
                <strong>{activity.assignmentTitle}</strong>
              </p>
              <p>{new Date(activity.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent activity</p>
      )}
    </div>
  );
}

export default RecentActivity;
