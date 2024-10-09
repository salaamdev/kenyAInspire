import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProgress } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Widget = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function ProgressWidgets() {
  const { token } = React.useContext(AuthContext);
  const [progressData, setProgressData] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalModules, setTotalModules] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgress(token);
        setProgressData(data.progress);
        let completed = 0;
        let modules = 0;
        data.progress.forEach((item) => {
          completed += item.completed_modules;
          modules += item.total_modules;
        });
        setTotalCompleted(completed);
        setTotalModules(modules);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <WidgetsContainer>
      <Widget>
        <h3>Modules Completed</h3>
        <p>{totalCompleted}</p>
      </Widget>
      <Widget>
        <h3>Total Modules</h3>
        <p>{totalModules}</p>
      </Widget>
      <Widget>
        <h3>Completion Rate</h3>
        <p>
          {totalModules > 0
            ? ((totalCompleted / totalModules) * 100).toFixed(2)
            : 0}
          %
        </p>
      </Widget>
    </WidgetsContainer>
  );
}

export default ProgressWidgets;
