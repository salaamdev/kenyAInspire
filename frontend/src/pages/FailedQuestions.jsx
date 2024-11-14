import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  FaGraduationCap,
  FaClock,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";
import { getFailedQuestions } from "../services/api";
import "./pageStyles/FailedQuestions.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const { token } = useContext(AuthContext);
  const [failedQuestions, setFailedQuestions] = useState([]);

  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Overall Performance",
        data: [75, 78, 82, 79, 85, 88],
        borderColor: "#4CAF50",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const subjectScores = {
    labels: [
      "Mathematics",
      "English",
      "Science",
      "Social Studies",
      "Kiswahili",
    ],
    datasets: [
      {
        label: "Subject Mastery (%)",
        data: [85, 78, 92, 75, 88],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
      },
    ],
  };

  const studyTimeData = {
    labels: ["Study", "Practice", "Revision", "Tests"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFailedQuestions(token);
        setFailedQuestions(data.failedQuestions);
      } catch (error) {
        console.error("Error fetching failed questions:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="analytics-page">
      <h1 className="analytics-title">Learning Analytics</h1>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <FaGraduationCap className="stat-icon" />
          <div className="stat-info">
            <h3>Overall Grade</h3>
            <p className="stat-value">A-</p>
            <span className="stat-trend positive">↑ 2.3%</span>
          </div>
        </div>
        <div className="stat-card">
          <FaClock className="stat-icon" />
          <div className="stat-info">
            <h3>Study Time</h3>
            <p className="stat-value">32h</p>
            <span className="stat-trend positive">↑ 5.7%</span>
          </div>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div className="stat-info">
            <h3>Completion Rate</h3>
            <p className="stat-value">88%</p>
            <span className="stat-trend negative">↓ 1.2%</span>
          </div>
        </div>
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <div className="stat-info">
            <h3>Achievements</h3>
            <p className="stat-value">12</p>
            <span className="stat-trend positive">↑ 2</span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Performance Trend</h3>
          <div className="chart-container">
            <Line data={performanceData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Subject Mastery</h3>
          <div className="chart-container">
            <Bar data={subjectScores} options={barOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Time Distribution</h3>
          <div className="chart-container">
            <Doughnut data={studyTimeData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-card improvement-areas">
          <h3>Areas for Improvement</h3>
          <div className="improvement-list">
            {failedQuestions.slice(0, 5).map((question, index) => (
              <div key={index} className="improvement-item">
                <div className="improvement-subject">{question.subject}</div>
                <div className="improvement-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${Math.random() * 40 + 30}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
