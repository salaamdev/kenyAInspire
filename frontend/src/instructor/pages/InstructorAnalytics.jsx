import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import SubjectPerformanceChart from "../components/charts/SubjectPerformanceChart";
import GenderDistributionChart from "../components/charts/GenderDistributionChart";
import AttendanceTrendChart from "../components/charts/AttendanceTrendChart";
import ExamPerformanceDistributionChart from "../components/charts/ExamPerformanceDistributionChart";
import "./pageStyles/InstructorAnalytics.css";

export default function InstructorAnalytics() {
  return (
    <div className="instructor-analytics-page">
      <InstructorNavbar />
      <div className="analytics-container">
        <h1 className="analytics-title">Class Analytics</h1>
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Subject Performance</h3>
            <SubjectPerformanceChart />
          </div>
          <div className="chart-card">
            <h3>Gender Distribution</h3>
            <GenderDistributionChart />
          </div>
          <div className="chart-card">
            <h3>Attendance Trends</h3>
            <AttendanceTrendChart />
          </div>
          <div className="chart-card">
            <h3>Exam Performance Distribution</h3>
            <ExamPerformanceDistributionChart />
          </div>
        </div>
      </div>
    </div>
  );
}
