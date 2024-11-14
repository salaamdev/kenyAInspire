// frontend/src/instructor/components/charts/ExamPerformanceDistributionChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";

function ExamPerformanceDistributionChart() {
  const data = {
    labels: [
      "A (80-100%)",
      "B (65-79%)",
      "C (50-64%)",
      "D (40-49%)",
      "E (0-39%)",
    ],
    datasets: [
      {
        data: [15, 30, 35, 15, 5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "End Term Exam Grade Distribution",
        font: { size: 16 },
      },
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="chart-widget">
      <div className="ai-insight">
        <i className="fas fa-graduation-cap"></i>
        <p>AI Insight: 80% of students achieved grade C and above</p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ExamPerformanceDistributionChart;
