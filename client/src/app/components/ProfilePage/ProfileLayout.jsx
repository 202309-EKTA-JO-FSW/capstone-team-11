import React from 'react';
import Sidebar from './Sidebar'; 
import Profile from './Profile';

const ProfileLayout = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Sidebar />
      </div>
      <div style={styles.profile}>
        <Profile />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    padding: '20px', 
    minHeight: '100vh', 
  },
  sidebar: {
    marginRight: '20px', 
    flex: '1', 
  },
  profile: {
    flex: '20', 
  },
};

export default ProfileLayout;