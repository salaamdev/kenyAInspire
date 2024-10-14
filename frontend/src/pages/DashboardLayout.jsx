import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Chatbot from "../components/Chatbot";

const DashboardContainer = styled.div`
  display: flex;
  width: ${({ $isOpen }) => ($isOpen ? "calc(100% - 200px)" : "100%")};
  margin-left: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(4)};
`;

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <DashboardContainer isOpen={isSidebarOpen}>
          <ContentArea>
            <Outlet />
          </ContentArea>
        </DashboardContainer>
      </div>
      <Chatbot />
    </>
  );
}

export default DashboardLayout;
