import React from "react";
import styled from "styled-components";
import CoursesList from "../components/CoursesList";

const PageContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
`;

function Courses() {
  return (
    <>
      <PageContainer>
        <ContentArea>
          <h2>Your Courses</h2>
          <CoursesList />
        </ContentArea>
      </PageContainer>
    </>
  );
}

export default Courses;
