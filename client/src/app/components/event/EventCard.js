import React from 'react';

// Styles for the card
const cardStyles = {
  Card: {
    width: '905px',
    height: '232px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    margin: '16px', // Add margin for spacing between cards
    display: 'flex', // Align content horizontally
    alignItems: 'center', // Center align content vertically
    padding: '16px', // Add padding for inner content
    boxSizing: 'border-box', // Include padding in width and height
    position: 'relative', // Positioning for absolute elements
  },
  ImageContainer: {
    width: '200px',
    height: '200px',
    borderRadius: '12px',
    backgroundImage: 'url(https://via.placeholder.com/200)', // Placeholder image URL
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '30px',
    marginLeft: '20px', // Add spacing between image and text
  },
  EventDetails: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    lineHeight: '22px',
    marginLeft: '20px', // Add spacing between image and text
  },
  Button: {
    cursor: 'pointer',
    width: '206px',
    height: '34px',
    padding: '0px 8px',
    border: '0',
    borderRadius: '12px',
    backgroundColor: '#1b1b1d',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    outline: 'none',
    position: 'absolute', // Position button absolutely
    bottom: '16px', // Position button at the bottom
    right: '16px', // Position button at the right
  },
};

// Event card component
const EventCard = ({ eventName, eventRating }) => {
  return (
    <div style={cardStyles.Card}>
      <div style={cardStyles.ImageContainer}></div>
      <div style={cardStyles.Text}>{eventName}</div>
      <div style={cardStyles.EventDetails}>Rating: {eventRating}</div>
      <button style={cardStyles.Button}>Book Now</button>
    </div>
  );
};

export default EventCard;