import React, { useState } from 'react';

const EditProfile = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave({ name, email });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProfile;