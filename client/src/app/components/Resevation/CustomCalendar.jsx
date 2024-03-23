import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={styles.Calendar}>
      <h2>Calendar</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

const styles = {
  Calendar: {
    margin: 'auto',
    width: '300px',
    textAlign: 'center',
  },
  
  };


export default CustomCalendar;
