import React, { useEffect, useState } from "react";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/ProgressWidgets.css";

function ProgressWidgets() {
  const { token } = React.useContext(AuthContext);
  const [progressData, setProgressData] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalModules, setTotalModules] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgress(token);
        setProgressData(data.progress);
        let completed = 0;
        let modules = 0;
        data.progress.forEach((item) => {
          completed += item.completed_modules;
          modules += item.total_modules;
        });
        setTotalCompleted(completed);
        setTotalModules(modules);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="widgets-container">
      <div className="widget">
        <h3>Modules Completed</h3>
        <p>{totalCompleted}</p>
      </div>
      <div className="widget">
        <h3>Total Modules</h3>
        <p>{totalModules}</p>
      </div>
      <div className="widget">
        <h3>Completion Rate</h3>
        <p>
          {totalModules > 0
            ? ((totalCompleted / totalModules) * 100).toFixed(2)
            : 0}
          %
        </p>
      </div>
    </div>
  );
}

export default ProgressWidgets;
