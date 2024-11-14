import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import RecentActivity from "../components/RecentActivity";
import UpcomingAssignments from "../components/UpcomingAssignments";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import QuickActions from "../components/QuickActions";
import "./pageStyles/InstructorDashboard.css";
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
