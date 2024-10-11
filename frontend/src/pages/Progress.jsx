import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import ProgressWidgets from "../components/ProgressWidgets";
import ProgressDetails from "../components/ProgressDetails";

const PageContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
`;

function Progress() {
  return (
    <>
      {/* <Navbar /> */}
      <PageContainer>
        {/* <Sidebar /> */}
        <ContentArea>
          <h2>Your Progress</h2>
          <ProgressWidgets />
          <ProgressDetails />
        </ContentArea>
      </PageContainer>
    </>
  );
}

export default Progress;
