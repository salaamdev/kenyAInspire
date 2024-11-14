// frontend/src/instructor/pages/InstructorGrades.jsx

import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";

function InstructorGrades() {
  return (
    <div>
      <InstructorNavbar />
      <div className="instructor-grades">
        <h1>Student Grades</h1>
        <p>
          View and manage student grades here. You can input grades, provide
          feedback, and export reports.
        </p>
        {/* Future development: Add gradebook functionality here */}
      </div>
    </div>
  );
}

export default InstructorGrades;
