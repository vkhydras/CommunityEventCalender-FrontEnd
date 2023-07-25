import React, { useState, useEffect } from 'react';
import eventService from '../../services/event';
import EventDetails from './EventDetails';
import './Calendar.css';

const Calendar = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend api and set them in the state
    eventService.getEvents()
      .then((data) => {
        setEvents(data); 
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleDeleteEvent = (eventId) => {
    // Remove the deleted event from the events state
    setEvents(events.filter((event) => event._id !== eventId));
  };

  return (
    <div className={!props.dark ?"calendar-container":"calendar-container darkCalendar"}>
      <h1>Community Event Calendar</h1>
      <div className="event-cards">
        {events.map((event) => (
          <EventDetails key={event._id} event={event} onDelete={handleDeleteEvent} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
