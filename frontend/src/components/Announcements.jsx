import React, { useEffect, useState } from "react";
import { getAnnouncements } from "../services/api";
import "./componentStyles/Announcements.css";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnnouncements();
        setAnnouncements(data.announcements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="announcements-container">
      <h3>Announcements</h3>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <strong>{announcement.title}</strong>: {announcement.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
