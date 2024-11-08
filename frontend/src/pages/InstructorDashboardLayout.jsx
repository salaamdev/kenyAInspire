import React from "react";
import { Outlet } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import Footer from "../components/Footer";
import "./pageStyles/Dashboard.css";

const InstructorDashboardLayout = () => {
    return (
     <>
        <div className="dashboard-layout">
            <InstructorNavbar />
            <div className="main-content">
                <Header />
                <Outlet /> {/* Render nested routes here */}
            </div>
        </div>
        <Footer />
     </>
    );
};

export default InstructorDashboardLayout;
