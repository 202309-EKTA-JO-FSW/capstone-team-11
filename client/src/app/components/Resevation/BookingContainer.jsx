import React from 'react';
import Calendar from './CustomCalendar.jsx';
import TimeDropdown from './TimeDropdown';
import BookButton from './BookButton';

const BookingContainer = () => {
  return (
    <div style={styles.BookingContainer}>
      <div style={styles.Info}>
        <div style={styles.InfoText}>Date</div>
        <div style={styles.InfoText}>Number of Attendees</div>
      </div>
      <Calendar />
      <TimeDropdown />
      <BookButton />
    </div>
  );
};

const styles = {
  BookingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Info: {
    marginBottom: '20px',
  },
  InfoText: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '31px',
    textAlign: 'center',
  },
};

export default BookingContainer;
