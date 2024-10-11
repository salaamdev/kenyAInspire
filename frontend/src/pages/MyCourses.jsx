import React, { useEffect, useState } from "react";
import CoursesList from "../components/CoursesList";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";

const OverallProgressContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
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

function MyCourses() {
  const { token } = React.useContext(AuthContext);
  const [overallProgress, setOverallProgress] = useState({
    completed: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchOverallProgress = async () => {
      try {
        const data = await getProgress(token);
        let totalCompleted = 0;
        let totalModules = 0;
        data.progress.forEach((item) => {
          totalCompleted += item.completed_modules;
          totalModules += item.total_modules;
        });
        setOverallProgress({ completed: totalCompleted, total: totalModules });
      } catch (error) {
        console.error("Error fetching overall progress:", error);
      }
    };
    fetchOverallProgress();
  }, [token]);

  const overallPercentage = overallProgress.total
    ? ((overallProgress.completed / overallProgress.total) * 100).toFixed(2)
    : 0;

  return (
    <>
      <h2>My Courses</h2>
      <OverallProgressContainer>
        <h3>Overall Progress</h3>
        <ProgressBar>
          <ProgressFill percentage={overallPercentage} />
        </ProgressBar>
        <p>{overallPercentage}% completed</p>
      </OverallProgressContainer>
      <CoursesList />
    </>
  );
}

export default MyCourses;
