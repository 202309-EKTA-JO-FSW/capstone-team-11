import React from 'react';

const TicketShowcase = ({ tickets }) => {
  return (
    <div>
      <h2>Ticket Showcase</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket.eventName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketShowcase;