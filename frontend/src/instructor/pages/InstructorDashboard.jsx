import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import RecentActivity from "../components/RecentActivity";
import UpcomingAssignments from "../components/UpcomingAssignments";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import QuickActions from "../components/QuickActions";
// import SubjectPerformanceChart from "../components/charts/SubjectPerformanceChart";
// import GenderDistributionChart from "../components/charts/GenderDistributionChart";
// import AttendanceTrendChart from "../components/charts/AttendanceTrendChart";
// import ExamPerformanceDistributionChart from "../components/charts/ExamPerformanceDistributionChart";
import "./pageStyles/InstructorDashboard.css";

// frontend/src/instructor/pages/InstructorDashboard.jsx
export default function InstructorDashboard() {
  return (
    <div className="instructor-dashboard-page">
      <InstructorNavbar />
      <div className="instructor-dashboard-container">
        <h1 className="page-title">Welcome to Your Dashboard</h1>
        <div className="dashboard-widgets">
          <QuickActions />
          <RecentActivity />
          <UpcomingAssignments />
          <ClassPerformanceChart />
        </div>
      </div>
    </div>
  );
}
