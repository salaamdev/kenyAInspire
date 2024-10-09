import React from "react";
import styled from "styled-components";

const AnnouncementsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

function Announcements() {
  const announcements = [
    "New course on Machine Learning now available!",
    "Scheduled maintenance on Saturday at 2 AM.",
  ];

  return (
    <AnnouncementsContainer>
      <h3>Announcements</h3>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>- {announcement}</li>
        ))}
      </ul>
    </AnnouncementsContainer>
  );
}

export default Announcements;
