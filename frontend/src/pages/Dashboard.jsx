// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import styled from "styled-components";
// import Chatbot from "../components/Chatbot";
// import WelcomeBanner from "../components/WelcomeBanner";
// import Announcements from "../components/Announcements";
// import ProgressWidgets from "../components/ProgressWidgets";
// import PersonalizedContent from "../components/PersonalizedContent";
// import UpcomingEvents from "../components/UpcomingEvents";
// import CoursesList from "../components/CoursesList";

// const DashboardContainer = styled.div`
//   display: flex;
//   width: ${({ isOpen }) => (isOpen ? "calc(100% - 200px)" : "100%")};
//   margin-left: ${({ isOpen }) => (isOpen ? "200px" : "0")};
//   transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
// `;

// const ContentArea = styled.main`
//   flex: 1;
//   padding: ${({ theme }) => theme.spacing(4)};
// `;

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <>
//       <Navbar />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <DashboardContainer isOpen={isSidebarOpen}>
//         <ContentArea>
//           <WelcomeBanner />
//           <Announcements />
//           <ProgressWidgets />
//           <CoursesList />
//           <PersonalizedContent />
//           <UpcomingEvents />
//           <Outlet />
//         </ContentArea>
//         <Chatbot />
//       </DashboardContainer>
//     </>
//   );
// }

// export default Dashboard;
