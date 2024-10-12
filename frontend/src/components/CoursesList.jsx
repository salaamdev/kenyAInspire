import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCourses } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { LinearProgress, Box } from "@mui/material";

const CoursesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const CourseCard = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

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
    <CoursesContainer>
      {courses.map((course) => {
        const percentage = course.total_modules
          ? ((course.completed_modules / course.total_modules) * 100).toFixed(2)
          : 0;
        return (
          <Link to={`/dashboard/courses/${course.id}`} key={course.id}>
            <CourseCard>
              <Title>{course.title}</Title>
              <p>{course.description}</p>
              <Box sx={{ width: "100%", mt: 1 }}>
                <LinearProgress variant="determinate" value={percentage} />
              </Box>
              <p>{percentage}% completed</p>
            </CourseCard>
          </Link>
        );
      })}
    </CoursesContainer>
  );
}

export default CoursesList;
