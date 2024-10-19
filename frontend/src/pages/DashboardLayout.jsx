// DashboardLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Include if you have a Navbar
import Footer from "../components/Footer";
// import Sidebar from "../components/Sidebar"; // Include if you have a Sidebar
import "./pageStyles/Dashboard.css";

export default function DashboardLayout() {
  return (
    <>
      <div className="dashboard">
        <Navbar />
        {/* Optionally include Navbar and Sidebar */}
        {/* <Sidebar /> */}
        <main className="dashboard-content">
          <Outlet /> {/* This renders the child components */}
        </main>
      </div>
      <Footer />
    </>
  );
}
