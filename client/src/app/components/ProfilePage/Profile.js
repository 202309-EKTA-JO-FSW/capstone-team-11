import React from 'react';
import { Link } from 'react-router-dom';
import TicketShowcase from './TicketShowcase';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <ProfilePicture profilePictureUrl={user.profilePictureUrl} />
      <TicketShowcase tickets={user.tickets} />
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  );
};

export default Profile;