// frontend/src/instructor/components/ClassPerformanceChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./componentStyles/ClassPerformanceChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ClassPerformanceChart() {
  const staticData = {
    labels: [
      "Form 1A",
      "Form 1B",
      "Form 2A",
      "Form 2B",
      "Form 3A",
      "Form 3B",
      "Form 4A",
      "Form 4B",
    ],
    datasets: [
      {
        label: "Average Class Performance",
        data: [72, 68, 75, 70, 82, 78, 85, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Class Performance Analysis 2024",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Average Score (%)",
        },
      },
    },
  };

  return (
    <div className="chart-widget">
      <div className="ai-insight">
        <i className="fas fa-brain"></i>
        <p>
          AI Insight: Form 4A shows highest improvement at 15% above term
          average
        </p>
      </div>
      <Bar data={staticData} options={options} />
    </div>
  );
}

export default ClassPerformanceChart;
