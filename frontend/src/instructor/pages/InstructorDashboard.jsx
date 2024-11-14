import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import RecentActivity from "../components/RecentActivity";
import UpcomingAssignments from "../components/UpcomingAssignments";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import SubjectPerformanceChart from "../components/charts/SubjectPerformanceChart";
import GenderDistributionChart from "../components/charts/GenderDistributionChart";
import AttendanceTrendChart from "../components/charts/AttendanceTrendChart";
import ExamPerformanceDistributionChart from "../components/charts/ExamPerformanceDistributionChart";
// import "./pageStyles/InstructorDashboard.css";

export default function InstructorDashboard() {
  return (
    <div className="instructor-dashboard-page">
      <InstructorNavbar />
      <div className="instructor-dashboard-container">
        <h1 className="page-title">Instructor Dashboard</h1>
        <div className="dashboard-widgets">
          <div className="widget">
            <h2 className="widget-title">Recent Activity</h2>
            <RecentActivity />
          </div>
          <div className="widget">
            <h2 className="widget-title">Upcoming Assignments</h2>
            <UpcomingAssignments />
          </div>
          <div className="widget">
            <h2 className="widget-title">Class Performance Overview</h2>
            <ClassPerformanceChart />
          </div>
        </div>
        <div className="dashboard-charts-grid">
          <div className="chart-row">
            <div className="chart-container">
              <h2 className="chart-title">Subject Performance</h2>
              <SubjectPerformanceChart />
            </div>
            <div className="chart-container">
              <h2 className="chart-title">Gender Distribution</h2>
              <GenderDistributionChart />
            </div>
          </div>
          <div className="chart-row">
            <div className="chart-container">
              <h2 className="chart-title">Attendance Trend</h2>
              <AttendanceTrendChart />
            </div>
            <div className="chart-container">
              <h2 className="chart-title">Exam Performance Distribution</h2>
              <ExamPerformanceDistributionChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
