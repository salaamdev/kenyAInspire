// src/pages/Home.jsx

import React, { useEffect, useState, useContext } from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
import PersonalizedContent from "../components/PersonalizedContent";
import { AuthContext } from "../contexts/AuthContext";
import { getAnnouncements, getRecommendations } from "../services/api";
import "./pageStyles/Dashboard.css";

function Home() {
  const { token } = useContext(AuthContext);
  const [announcements, setAnnouncements] = useState([]);
  const [recommendations, setRecommendations] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [annData, recData] = await Promise.all([
          getAnnouncements(),
          getRecommendations(token),
        ]);
        setAnnouncements(annData.announcements);
        setRecommendations(recData.recommendations);
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
        <PersonalizedContent recommendations={recommendations} />
      </div>
    </>
  );
}

export default Home;
