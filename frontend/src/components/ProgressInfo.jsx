import React, { useEffect, useState, useContext } from "react";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

function ProgressInfo({ courseId }) {
  const { token } = useContext(AuthContext);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await getProgress(token);
        const courseProgress = data.progress.find(
          (p) => p.course_id === courseId
        );
        setProgress(courseProgress);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };
    fetchProgress();
  }, [token, courseId]);

  if (!progress) return <p>No progress data available.</p>;

  const percentage =
    progress.total_modules > 0
      ? ((progress.completed_modules / progress.total_modules) * 100).toFixed(2)
      : 0;

  return (
    <div>
      <p>
        Progress: {progress.completed_modules}/{progress.total_modules} modules
        ({percentage}%)
      </p>
    </div>
  );
}

export default ProgressInfo;
