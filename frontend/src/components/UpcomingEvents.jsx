import React from "react";
import styled from "styled-components";

const EventsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Event = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

function UpcomingEvents() {
  const events = [
    { date: "2023-10-20", event: "Math Quiz 1" },
    { date: "2023-10-25", event: "Science Project Submission" },
  ];

  return (
    <EventsContainer>
      <h3>Upcoming Events</h3>
      {events.map((event, index) => (
        <Event key={index}>
          <p>
            <strong>{event.event}</strong> on {event.date}
          </p>
        </Event>
      ))}
    </EventsContainer>
  );
}

export default UpcomingEvents;
