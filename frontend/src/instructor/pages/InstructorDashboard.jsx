// frontend/src/instructor/pages/InstructorDashboard.jsx

import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import RecentActivity from "../components/RecentActivity";
import UpcomingAssignments from "../components/UpcomingAssignments";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import QuickActions from "../components/QuickActions";

import "./InstructorDashboard.css";

function InstructorDashboard() {
  return (
    <div>
      <InstructorNavbar />
      <div className="instructor-dashboard">
        <h1>Welcome to Your Dashboard</h1>
        <div className="dashboard-widgets">
          <QuickActions />
          <RecentActivity />
          <UpcomingAssignments />
          <ClassPerformanceChart />
          {/* We'll add more widgets here */}
        </div>
      </div>
    </div>
  );
}

export default InstructorDashboard;
