// frontend/src/instructor/pages/InstructorSettings.jsx

import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";

function InstructorSettings() {
  return (
    <div>
      <InstructorNavbar />
      <div className="instructor-settings">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences here.</p>
        {/* Future development: Add settings forms here */}
      </div>
    </div>
  );
}

export default InstructorSettings;
