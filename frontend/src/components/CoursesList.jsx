import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCourses } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const CoursesContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const CourseCard = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  overflow: hidden;
  height: 20px;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ percentage }) => percentage}%;
`;

function CoursesList() {
  const { token } = React.useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses(token);
        console.log("Fetched courses:", data.courses); // Debugging log
        setCourses(data.courses || []); // Ensure courses is an array
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <CoursesContainer>
      {courses.length > 0 ? (
        courses.map((course) => {
          const percentage = course.total_modules
            ? ((course.completed_modules / course.total_modules) * 100).toFixed(
                2
              )
            : 0;
          return (
            <Link to={`/dashboard/courses/${course.id}`} key={course.id}>
              <CourseCard>
                <Title>{course.title}</Title>
                <p>{course.description}</p>
                <ProgressBar>
                  <ProgressFill percentage={percentage} />
                </ProgressBar>
                <p>{percentage}% completed</p>
              </CourseCard>
            </Link>
          );
        })
      ) : (
        <p>No courses available.</p>
      )}
    </CoursesContainer>
  );
}

export default CoursesList;
