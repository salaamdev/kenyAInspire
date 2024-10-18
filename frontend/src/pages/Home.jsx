// Home.jsx

import React from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
import ProgressWidgets from "../components/ProgressWidgets";
import PersonalizedContent from "../components/PersonalizedContent";
import UpcomingEvents from "../components/UpcomingEvents";
import "./pageStyles/Dashboard.css";

function Home() {
  return (
    <>
      <WelcomeBanner />
      <div className="dashboard-grid">
        <Announcements />
        <UpcomingEvents />
        <PersonalizedContent />
        <ProgressWidgets />
      </div>
    </>
  );
}

export default Home;
