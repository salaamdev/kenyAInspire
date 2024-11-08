// frontend/src/pages/InstructorHome.jsx

import React, { useEffect, useState, useContext } from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Announcements from "../components/Announcements";
import Notifications from "../components/Notifications";
import { AuthContext } from "../contexts/AuthContext";
import { getAnnouncements } from "../services/api";
import "./pageStyles/Dashboard.css";

function InstructorHome() {
    const { token } = useContext(AuthContext);
    const [announcements, setAnnouncements] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [annData, recData] = await Promise.all([
                    getAnnouncements(),
                ]);
                setAnnouncements(annData.announcements);
                setNotifications(annData.announcements);
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
                <Notifications notifications={notifications} />
                {/* Use the new component */}
            </div>
        </>
    );
}

export default InstructorHome;
