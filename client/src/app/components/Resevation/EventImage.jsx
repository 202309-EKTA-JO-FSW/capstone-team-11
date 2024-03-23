import React from 'react';

const EventImage = () => {
  return (
    <div style={styles.EventImageContainer}>
      <img src="event_image.jpg" alt="Event" style={styles.EventImage} />
    </div>
  );
};

const styles = {
  EventImageContainer: {
    textAlign: 'center',
    margin: '50px',
  },
  EventImage: {
    width: '500px',
    height: '300px',
    borderRadius: '12px',
  },
};

export default EventImage;
