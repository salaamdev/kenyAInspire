// frontend/src/pages/Home.jsx
import React, { useEffect, useState, useContext } from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import StudentStats from "../components/StudentStats";
import Announcements from "../components/Announcements";
import Recommendations from "../components/Recommendations";
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
    <div className="dashboard-home">
      <WelcomeBanner />
      <StudentStats />
      <div className="dashboard-grid">
        <Announcements announcements={announcements} />
        <Recommendations markdownContent={recommendations} />
      </div>
    </div>
  );
}

export default Home;
