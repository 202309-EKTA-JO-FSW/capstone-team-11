import React, { useState } from 'react';
import FilterByLocation from './FilterByLocation';
import FilterByPrice from './FilterByPrice';
import FilterByCategory from './FilterByCategory';
import EventList from './EventList';

const AppPage = () => {
  // State to hold filter values
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Handler functions for filter changes
  const handleLocationChange = (value) => {
    setLocationFilter(value);
  };

  const handlePriceChange = (value) => {
    setPriceFilter(value);
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Filter components */}
      <FilterByLocation onChange={handleLocationChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByCategory onChange={handleCategoryChange} />

      {/* Event list */}
      <EventList 
        locationFilter={locationFilter} 
        priceFilter={priceFilter} 
        categoryFilter={categoryFilter} 
      />
    </div>
  );
};

export default AppPage;
