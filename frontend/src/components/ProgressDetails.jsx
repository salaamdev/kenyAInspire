import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

const ProgressContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const CourseProgress = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
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

function ProgressDetails() {
  const { token } = useContext(AuthContext);
  const [progressData, setProgressData] = useState([]);
  const data = progressData.map((item) => ({
    name: `Course ${item.course_id}`,
    completed: item.completed_modules,
    total: item.total_modules,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgress(token);
        console.log("Fetched progress:", data.progress); // Add this line
        setProgressData(data.progress);
      } catch (error) {
        console.error("Error fetching progress details:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <ProgressContainer>
      <h3>Course Progress Details</h3>
      {progressData.map((item) => {
        const percentage =
          item.total_modules > 0
            ? ((item.completed_modules / item.total_modules) * 100).toFixed(2)
            : 0;
        return (
          <CourseProgress key={item.course_id}>
            <h4>Course ID: {item.course_id}</h4>
            <ProgressBar>
              <ProgressFill percentage={percentage} />
            </ProgressBar>
            <p>{percentage}% completed</p>
          </CourseProgress>
        );
      })}
    </ProgressContainer>
  );
}

export default ProgressDetails;
