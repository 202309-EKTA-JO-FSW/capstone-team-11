import React from 'react';

const FilterByCategory = ({ onChange }) => {
  const handleCategoryChange = (e) => {
    const category = e.target.value; // Get the value from the select element
    onChange('category', category); // Call the onChange callback with the filter type and value
  };

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="concerts">Concerts</option>
        <option value="conferences">Conferences</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default FilterByCategory;
