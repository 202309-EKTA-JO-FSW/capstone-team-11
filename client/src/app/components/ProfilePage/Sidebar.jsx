import React from 'react';

const Sidebar = () => {
  return (
    <div style={styles.Card}>
      <button style={styles.BackButton}>Back</button>
      <div style={styles.SidebarItems}>
        <SidebarItem text="Account Settings" />
        <SidebarItem text="Profile Information" />
        <SidebarItem text="Payment Methods" />
        <SidebarItem text="Security" />
        <SidebarItem text="Event Preferences" />
        <SidebarItem text="Notifications" />
        <SidebarItem text="Add Attendees" />
      </div>
    </div>
  );
};

const SidebarItem = ({ text }) => {
  return (
    <div style={styles.SidebarItem}>
      <a href="#" style={styles.Link}>{text}</a>
    </div>
  );
};

const styles = {
  Card: {
    width: '343px',
    height: '630px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  },
  BackButton: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    marginBottom: '20px',
  },
  SidebarItems: {
    marginTop: '20px',
  },
  SidebarItem: {
    marginBottom: '10px',
  },
  Link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
  },
};

export default Sidebar;