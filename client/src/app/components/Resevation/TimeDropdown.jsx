import React from 'react';

const TimeDropdown = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.TimeText}>Time:</div>
      <div style={styles.Dropdown}>
        <select style={styles.Select}>
          <option>9:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
          <option>01:00 PM</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

const styles = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TimeText: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '31px',
    marginBottom: '10px',
    marginTop: '20px', // Add space above the Time text
  },
  Dropdown: {
    width: '200px',
    border: '1px solid #d3d3d8',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  Select: {
    width: '100%',
    height: '40px',
    padding: '0px 8px',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontFamily: 'Poppins',
    lineHeight: '26px',
    textAlign: 'center',
    outline: 'none',
  },
};

export default TimeDropdown;