import React from 'react';

const FilterByLocation = ({ onChange }) => {
  const handleLocationChange = (e) => {
    const location = e.target.value; // Get the value from the input field
    onChange('location', location); // Call the onChange callback with the filter type and value
  };

  return (
    <div>
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" onChange={handleLocationChange} />
    </div>
  );
};

export default FilterByLocation;
