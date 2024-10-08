import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import PersonalizedContent from "../components/PersonalizedContent";
import AccessibilityOptions from "../components/AccessibilityOptions";
import VirtualLab from "../components/VirtualLab";
import Container from "../components/Container";

const DashboardContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
  /* Remove any width restrictions here */
`;

function Dashboard() {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar />
        <ContentArea>
          <Container>
            <AccessibilityOptions />
            <PersonalizedContent />
            <VirtualLab />
          </Container>
        </ContentArea>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
