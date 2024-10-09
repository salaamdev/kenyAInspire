import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAnnouncements } from "../services/api";

const AnnouncementsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

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
    <AnnouncementsContainer>
      <h3>Announcements</h3>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <strong>{announcement.title}</strong>: {announcement.content}
          </li>
        ))}
      </ul>
    </AnnouncementsContainer>
  );
}

export default Announcements;
