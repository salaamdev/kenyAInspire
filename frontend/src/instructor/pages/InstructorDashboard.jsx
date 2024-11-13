import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import "./InstructorDashboard.css";

function InstructorDashboard() {
  return (
    <div className="instructor-dashboard">
      <InstructorNavbar />
      <main>
        <h1>Welcome to the Instructor Portal</h1>
        {/* Future development: Add instructor functionalities here */}
      </main>
    </div>
  );
}

export default InstructorDashboard;
