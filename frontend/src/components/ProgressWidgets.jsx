import React from "react";
import styled from "styled-components";

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
  return (
    <WidgetsContainer>
      <Widget>
        <h3>Courses Completed</h3>
        <p>5</p>
      </Widget>
      <Widget>
        <h3>Hours Spent Learning</h3>
        <p>120</p>
      </Widget>
      <Widget>
        <h3>Achievements</h3>
        <p>3 Badges Earned</p>
      </Widget>
    </WidgetsContainer>
  );
}

export default ProgressWidgets;
