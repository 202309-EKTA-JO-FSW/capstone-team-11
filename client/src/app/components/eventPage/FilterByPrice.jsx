import React from 'react';

const FilterByPrice = ({ onChange }) => {
  const handlePriceChange = (e) => {
    const price = e.target.value; // Get the value from the input field
    onChange('price', price); // Call the onChange callback with the filter type and value
  };

  return (
    <div>
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" onChange={handlePriceChange} />
    </div>
  );
};

export default FilterByPrice;
