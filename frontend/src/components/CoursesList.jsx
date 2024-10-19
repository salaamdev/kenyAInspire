import React, { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./componentStyles/CoursesList.css";

function CoursesList() {
  const { token } = React.useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses(token);
        setCourses(data.courses || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, [token]);

  if (!courses.length) {
    return <p className="no-courses">No courses available.</p>;
  }

  return (
    <div className="courses-grid">
      {courses.map((course) => {
        const percentage = course.total_modules
          ? ((course.completed_modules / course.total_modules) * 100).toFixed(2)
          : 0;
        return (
          <Link
            to={`/dashboard/courses/${course.id}`}
            key={course.id}
            className="course-card"
          >
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="completion-rate">{percentage}% completed</p>
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesList;
