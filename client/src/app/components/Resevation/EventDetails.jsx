import React from 'react';

const EventDetails = () => {
  return (
    <div style={styles.EventDetails}>
      <div style={styles.EventDetailsText}>
        Get ready to experience a day filled with inspiring talks, informative sessions, and networking opportunities.
      </div>
    </div>
  );
};

const styles = {
  EventDetails: {
    textAlign: 'center',
    padding: '50px',
  },
  EventDetailsText: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '31px',
  },
};

export default EventDetails;
