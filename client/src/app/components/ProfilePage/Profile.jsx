import React, { useState } from 'react';

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
          <Text text="Profile Information" />
        </div>
        <div style={styles.Info}>
          <Text text="Full Name" />
          <div style={styles.ProfileInfo}>
            <span>{name}</span>
            <EditButton onClick={() => handleEdit('name')} />
          </div>
        </div>
        <div style={styles.Info}>
          <Text text="Location" />
          <div style={styles.ProfileInfo}>
            <span>{location}</span>
            <EditButton onClick={() => handleEdit('location')} />
          </div>
        </div>
        <div style={styles.Info}>
          <Text text="Email" />
          <div style={styles.ProfileInfo}>
            <span>{email}</span>
            <EditButton onClick={() => handleEdit('email')} />
          </div>
        </div>
        <div style={styles.Info}>
          <Text text="Nationality" />
          <div style={styles.ProfileInfo}>
            <span>{nationality}</span>
            <EditButton onClick={() => handleEdit('nationality')} />
          </div>
        </div>
        <div style={styles.Info}>
          <Text text="Date of Birth" />
          <div style={styles.ProfileInfo}>
            <span>{dateOfBirth}</span>
            <EditButton onClick={() => handleEdit('dateOfBirth')} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Text = ({ text }) => {
  return (
    <div style={styles.Text}>
      {text}
    </div>
  );
};

const EditButton = ({ onClick }) => {
  return (
    <button style={styles.EditButton} onClick={onClick}>Edit</button>
  );
};

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
    marginBottom: '10px', // Adjust margin bottom
  },
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '22px',
    width: '200px', // Adjust width as needed
  },
  ProfileInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    gap: '20px', // Increase gap between text and button
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