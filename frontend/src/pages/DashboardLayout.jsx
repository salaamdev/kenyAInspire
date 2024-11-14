// frontend/src/pages/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentStats from "../components/StudentStats";
import Announcements from "../components/Announcements";
import Recommendations from "../components/Recommendations";
import "./pageStyles/Dashboard.css";

export default function DashboardLayout() {
  return (
    <>
      <div className="dashboard">
        <Navbar />
        <main className="dashboard-content">
          {/* <div className="dashboard-grid">
            <Announcements />
            <Recommendations />
          </div> */}
          {/* <StudentStats /> */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
