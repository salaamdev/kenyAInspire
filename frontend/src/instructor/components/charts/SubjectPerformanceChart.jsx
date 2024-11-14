// frontend/src/instructor/components/charts/SubjectPerformanceChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function SubjectPerformanceChart() {
  const data = {
    labels: [
      "Mathematics",
      "English",
      "Kiswahili",
      "Science",
      "Social Studies",
      "Religious Education",
    ],
    datasets: [
      {
        label: "Average Score (%)",
        data: [68.5, 72.3, 76.8, 65.4, 78.2, 82.1],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Subject Performance Overview - Term 1 2024",
        font: { size: 16 },
      },
      legend: { position: "top" },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="chart-widget">
      <div className="ai-insight">
        <i className="fas fa-lightbulb"></i>
        <p>
          AI Insight: Kiswahili shows consistent improvement across all forms
        </p>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SubjectPerformanceChart;
