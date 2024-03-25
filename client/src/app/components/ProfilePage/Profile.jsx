import React, { useState } from 'react';
import Button from '../Button';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('Your Location');
  const [email, setEmail] = useState('johndoe@example.com');
  const [nationality, setNationality] = useState('American');
  const [dateOfBirth, setDateOfBirth] = useState('01/01/1990');

  const handleEdit = (type) => {
    const newValue = prompt(`Enter new ${type}:`);
    if (newValue !== null && newValue !== '') {
      switch (type) {
        case 'name':
          setName(newValue);
          break;
        case 'location':
          setLocation(newValue);
          break;
        case 'email':
          setEmail(newValue);
          break;
        case 'nationality':
          setNationality(newValue);
          break;
        case 'dateOfBirth':
          setDateOfBirth(newValue);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div style={styles.Container}>
      <div style={styles.Section}>
        <div style={styles.SectionHeader}>
          <p> Profile Information</p>
        </div>
        <div style={styles.Info}>
          <img src='https://tailwindcss.com/img/erin-lindford.jpg' alt="Profile" style={styles.ProfileImage} />
          <div>
            <p>Full Name</p>
            <div style={styles.ProfileInfo}>
              <span>{name}</span>
              <Button onClick={() => handleEdit('name')} title= 'Edit'/>
            </div>
          </div>
        </div>
        {/* Rest of your profile information */}
      </div>
    </div>
  );
};

// Text and EditButton components remain the same

const styles = {
  Container: {
    marginLeft: '20px',
  },
  Section: {
    marginBottom: '20px',
  },
  SectionHeader: {
    marginBottom: '10px',
  },
  Info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  ProfileImage: {
    width: '100px', // Adjust width as needed
    height: '100px', // Adjust height as needed
    borderRadius: '50%', // Make it circular
  },
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '22px',
  },
  ProfileInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  EditButton: {
    backgroundColor: '#1b1b1d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'Poppins',
  },
};

export default Profile;