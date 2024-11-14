import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import RecentActivity from "../components/RecentActivity";
import UpcomingAssignments from "../components/UpcomingAssignments";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import SubjectPerformanceChart from "../components/charts/SubjectPerformanceChart";
import GenderDistributionChart from "../components/charts/GenderDistributionChart";
import AttendanceTrendChart from "../components/charts/AttendanceTrendChart";
import ExamPerformanceDistributionChart from "../components/charts/ExamPerformanceDistributionChart";
import "./pageStyles/InstructorDashboard.css";

export default function InstructorDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      trend: "+5.2%",
      isPositive: true,
    },
    {
      title: "Average Attendance",
      value: "92%",
      trend: "+2.1%",
      isPositive: true,
    },
    {
      title: "Average Grade",
      value: "B+",
      trend: "+0.3",
      isPositive: true,
    },
    {
      title: "Success Rate",
      value: "88%",
      trend: "-1.2%",
      isPositive: false,
    },
  ];

  return (
    <div className="instructor-dashboard-page">
      <InstructorNavbar />
      <div className="instructor-dashboard-container">
        <div className="dashboard-header">
          <h1 className="page-title">Dashboard Overview</h1>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
                <div
                  className={`stat-trend ${
                    stat.isPositive ? "trend-up" : "trend-down"
                  }`}
                >
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="charts-container">
          {/* First Pair */}
          <div className="chart-pair">
            <div className="chart-widget">
              <div className="chart-header">
                <h3 className="chart-title">Class Performance</h3>
              </div>
              <ClassPerformanceChart />
            </div>

            <div className="chart-widget">
              <div className="chart-header">
                <h3 className="chart-title">Subject Performance</h3>
              </div>
              <SubjectPerformanceChart />
            </div>
          </div>

          {/* Second Pair */}
          <div className="chart-pair">
            <div className="chart-widget">
              <div className="chart-header">
                <h3 className="chart-title">Attendance Trends</h3>
              </div>
              <AttendanceTrendChart />
            </div>

            <div className="chart-widget">
              <div className="chart-header">
                <h3 className="chart-title">Grade Distribution</h3>
              </div>
              <ExamPerformanceDistributionChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
