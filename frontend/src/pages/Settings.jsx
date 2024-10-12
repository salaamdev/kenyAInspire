import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import ProfileSettings from "../components/ProfileSettings";
import AccessibilityOptions from "../components/AccessibilityOptions";

const PageContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
`;

function Settings() {
  return (
    <>
      {/* <Navbar /> */}
      <PageContainer>
        {/* <Sidebar /> */}
        <ContentArea>
          <h2>Settings</h2>
          <ProfileSettings />
          <AccessibilityOptions />
        </ContentArea>
      </PageContainer>
    </>
  );
}

export default Settings;
