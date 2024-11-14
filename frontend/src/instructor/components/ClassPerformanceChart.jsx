// frontend/src/instructor/components/ClassPerformanceChart.jsx

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getClassPerformance } from "../../services/instructorApi";
import "./ClassPerformanceChart.css";

// frontend/src/instructor/components/ClassPerformanceChart.jsx
function ClassPerformanceChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Average Grade",
        data: [],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  });

  useEffect(() => {
    fetchClassPerformance();
  }, []);

  const fetchClassPerformance = async () => {
    try {
      const { data } = await getClassPerformance();
      if (data && data.students) {
        setChartData({
          labels: data.students.map((student) => student.name),
          datasets: [
            {
              label: "Average Grade",
              data: data.students.map((student) => student.averageGrade),
              backgroundColor: "rgba(75,192,192,0.6)",
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching class performance:", error);
      // Set empty chart data on error
      setChartData({
        labels: [],
        datasets: [
          {
            label: "Average Grade",
            data: [],
            backgroundColor: "rgba(75,192,192,0.6)",
          },
        ],
      });
    }
  };

  return (
    <div className="class-performance-chart">
      <h2>Class Performance</h2>
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}
export default ClassPerformanceChart;
