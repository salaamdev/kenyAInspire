// src/pages/Home.jsx

import React, { useEffect, useState, useContext } from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
// import ProgressWidgets from "../components/ProgressWidgets";
import PersonalizedContent from "../components/PersonalizedContent";
import UpcomingEvents from "../components/UpcomingEvents";
import { AuthContext } from "../contexts/AuthContext";
import {
  getAnnouncements,
  getEvents,
  getRecommendations,
  getProgress,
} from "../services/api";
import "./pageStyles/Dashboard.css";

function Home() {
  const { token } = useContext(AuthContext);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [recommendations, setRecommendations] = useState("");
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [annData, evtData, recData, progData] = await Promise.all([
          getAnnouncements(),
          getEvents(),
          getRecommendations(token),
          getProgress(token),
        ]);
        setAnnouncements(annData.announcements);
        setEvents(evtData.events);
        setRecommendations(recData.recommendations);
        setProgressData(progData.progress);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <WelcomeBanner />
      <div className="dashboard-grid">
        <Announcements announcements={announcements} />
        <UpcomingEvents events={events} />
        <PersonalizedContent recommendations={recommendations} />
        {/* <ProgressWidgets progressData={progressData} /> */}
      </div>
    </>
  );
}

export default Home;
