// frontend/src/instructor/components/charts/GenderDistributionChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";

function GenderDistributionChart() {
  const data = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        data: [486, 514],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Student Gender Distribution 2024",
        font: { size: 16 },
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="chart-widget">
      <div className="ai-insight">
        <i className="fas fa-venus-mars"></i>
        <p>AI Insight: 51.4% female enrollment shows positive gender parity</p>
      </div>
      <Pie data={data} options={options} />
    </div>
  );
}

export default GenderDistributionChart;
