import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
import ProgressWidgets from "../components/ProgressWidgets";
import PersonalizedContent from "../components/PersonalizedContent";
import UpcomingEvents from "../components/UpcomingEvents";
import CoursesList from "../components/CoursesList";

const DashboardContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
`;

function Dashboard() {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar />
        <ContentArea>
          <WelcomeBanner />
          <Announcements />
          <ProgressWidgets />
          <CoursesList />
          <PersonalizedContent />
          <UpcomingEvents />
        </ContentArea>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
