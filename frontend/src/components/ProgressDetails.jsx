import React, { useEffect, useState, useContext } from "react";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/ProgressDetails.css";

function ProgressDetails() {
  const { token } = useContext(AuthContext);
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgress(token);
        console.log("Fetched progress:", data.progress);
        setProgressData(data.progress);
      } catch (error) {
        console.error("Error fetching progress details:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="progress-container">
      <h3>Course Progress Details</h3>
      {progressData.map((item) => {
        const percentage =
          item.total_modules > 0
            ? ((item.completed_modules / item.total_modules) * 100).toFixed(2)
            : 0;
        return (
          <div className="course-progress" key={item.course_id}>
            <h4>Course ID: {item.course_id}</h4>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p>{percentage}% completed</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressDetails;
