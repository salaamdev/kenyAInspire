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
        console.log("Fetched courses:", data.courses);
        setCourses(data.courses || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, [token]);

  if (!courses.length) {
    return <p>No courses available.</p>;
  }

  return (
    <div className="courses-container">
      {courses.map((course) => {
        const percentage = course.total_modules
          ? ((course.completed_modules / course.total_modules) * 100).toFixed(2)
          : 0;
        return (
          <Link
            to={`/dashboard/courses/${course.id}`}
            key={course.id}
            className="course-link"
          >
            <div className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p>{course.description}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p>{percentage}% completed</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesList;
