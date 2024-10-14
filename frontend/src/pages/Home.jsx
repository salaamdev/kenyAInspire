import React from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
import ProgressWidgets from "../components/ProgressWidgets";
import CoursesList from "../components/CoursesList";
import PersonalizedContent from "../components/PersonalizedContent";
import UpcomingEvents from "../components/UpcomingEvents";

function Home() {
  return (
    <>
      <WelcomeBanner />
      <Announcements />
      <ProgressWidgets />
      {/* <CoursesList /> */}
      <PersonalizedContent />
      <UpcomingEvents />
    </>
  );
}

export default Home;
