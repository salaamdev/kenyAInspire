import React from "react";
import CoursesList from "../components/CoursesList";
import "./pageStyles/Courses.css";

function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <h2>Your Courses</h2>
      </div>
      <CoursesList />
    </div>
  );
}

export default Courses;
