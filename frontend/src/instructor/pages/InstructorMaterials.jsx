import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import "./pageStyles/InstructorMaterials.css";
export default function InstructorMaterials() {
  return (
    <div className="instructor-materials-page">
      <InstructorNavbar />
      <div className="instructor-materials-container">
        <h1 className="page-title">Course Materials</h1>
        <p className="description">
          Upload and organize your lesson plans, lecture notes, and other
          resources here.
        </p>
        <div className="placeholder-content">
          <div className="placeholder-item"></div>
          <div className="placeholder-item"></div>
          <div className="placeholder-item"></div>
        </div>
      </div>
    </div>
  );
}
