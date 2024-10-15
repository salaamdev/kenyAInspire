import React, { useEffect, useState } from "react";
import { getEvents } from "../services/api";
import "./componentStyles/UpcomingEvents.css";

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
    <div className="events-container">
      <h3>Upcoming Events</h3>
      {events.map((event) => (
        <div className="event-item" key={event.id}>
          <p>
            <strong>{event.title}</strong> on {event.event_date}
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
