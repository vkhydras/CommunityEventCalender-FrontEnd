import React from 'react';
import eventService from '../../services/event';


const EventDetails = ({ event, onDelete }) => {
  


  const handleDelete = () => {
    eventService.deleteEvent(event._id)
      .then(() => {
        onDelete(event._id); // Update the events in the parent component after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <button onClick={handleDelete}>Delete</button>
      
    </div>
  );
};

export default EventDetails;
