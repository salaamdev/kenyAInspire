// frontend/src/instructor/pages/InstructorMaterials.jsx

import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";

function InstructorMaterials() {
  return (
    <div>
      <InstructorNavbar />
      <div className="instructor-materials">
        <h1>Course Materials</h1>
        <p>
          Upload and organize your lesson plans, lecture notes, and other
          resources here.
        </p>
        {/* Future development: Add file upload and organization features here */}
      </div>
    </div>
  );
}

export default InstructorMaterials;
