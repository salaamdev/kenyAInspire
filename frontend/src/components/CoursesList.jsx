import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCourses } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

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

function CoursesList() {
  const { token } = React.useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses(token);
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <CoursesContainer>
      <Title>Your Courses</Title>
      {courses.map((course) => (
        <CourseCard key={course.id}>
          <h4>{course.title}</h4>
          <p>{course.description}</p>
        </CourseCard>
      ))}
    </CoursesContainer>
  );
}

export default CoursesList;
