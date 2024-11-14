// frontend/src/instructor/pages/InstructorLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";

function InstructorLayout() {
  return (
    <div className="instructor-layout">
      <InstructorNavbar />
      <div className="instructor-content">
        <Outlet />
      </div>
    </div>
  );
}

export default InstructorLayout;
