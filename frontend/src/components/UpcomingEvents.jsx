import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getEvents } from "../services/api";

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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvents();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <EventsContainer>
      <h3>Upcoming Events</h3>
      {events.map((event) => (
        <Event key={event.id}>
          <p>
            <strong>{event.title}</strong> on {event.event_date}
          </p>
          <p>{event.description}</p>
        </Event>
      ))}
    </EventsContainer>
  );
}

export default UpcomingEvents;
