// frontend/src/instructor/components/charts/AttendanceTrendChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";

function AttendanceTrendChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Average Attendance Rate (%)",
        data: [92, 94, 91, 88, 93, 95],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Student Attendance Trends 2024",
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        min: 80,
        max: 100,
      },
    },
  };

  return (
    <div className="chart-widget">
      <div className="ai-insight">
        <i className="fas fa-chart-line"></i>
        <p>AI Insight: 95% attendance in June is the highest this year</p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default AttendanceTrendChart;
