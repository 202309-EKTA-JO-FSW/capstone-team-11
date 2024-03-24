import React from 'react';

const Header = () => {
  return (
    <div style={styles.Header}>
      <div style={styles.EventName}>Event Name</div>
      <button style={styles.BookButton}>Book Now</button>
    </div>
  );
};

const styles = {
  Header: {
    width: '80%', // Adjust width as needed
    height: '100px', // Adjust height as needed
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f0f0f0',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 50px',
    margin: '0 auto', // Center horizontally
  },
  EventName: {
    color: '#030303',
    fontSize: '32px',
    fontFamily: 'Poppins',
    lineHeight: '42px',
  },
  BookButton: {
    cursor: 'pointer',
    width: '200px',
    height: '64px',
    padding: '0px 8px',
    border: '0',
    borderRadius: '12px',
    backgroundColor: '#1b1b1d',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '64px',
    outline: 'none',
  },
};

export default Header;
