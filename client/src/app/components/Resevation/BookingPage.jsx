import React from 'react';
import Header from './Header';
import EventDetails from './EventDetails';
import CustomCalendar from './CustomCalendar';
import TimeDropdown from './TimeDropdown';
import BookButton from './BookButton';

const BookingPage = () => {
  return (
    <div>
      <Header />
      <EventDetails />
      <CustomCalendar />
      <TimeDropdown />
      <BookButton />
    </div>
  );
};

export default BookingPage;
