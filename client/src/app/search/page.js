"use client"
import React, { useState } from 'react';

const FilterPage = () => {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [freeEvents, setFreeEvents] = useState(false);
  const [paidEvents, setPaidEvents] = useState(false);

  const handleApplyFilter = () => {
    // Generate filter code based on state variables
    const filterOptions = {
      eventType,
      location,
      startDate,
      endDate,
      minPrice,
      maxPrice,
      freeEvents,
      paidEvents,
    };
    console.log('Filter Options:', filterOptions);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Filter Events</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Event Type and Location */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Event Type</h2>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 mb-4"
          >
            <option value="">Select Event Type</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="education">Education</option>
            {/* Add more event types */}
          </select>
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
          >
            <option value="">Select Location</option>
            <option value="Amman">Amman</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Balqa">Balqa</option>
            <option value="Jerash">Jerash</option>
            {/* Add more locations */}
          </select>
        </div>
        {/* Date Range and Price */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Date Range</h2>
          <div className="flex space-x-4 mb-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">Price Range</h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
            />
          </div>
        </div>
      </div>
      {/* Free and Paid Events */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Event Type</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={freeEvents}
              onChange={(e) => setFreeEvents(e.target.checked)}
              className="form-checkbox border border-gray-300 rounded text-gray-800"
            />
            <span className="text-gray-800">Free Events</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={paidEvents}
              onChange={(e) => setPaidEvents(e.target.checked)}
              className="form-checkbox border border-gray-300 rounded text-gray-800"
            />
            <span className="text-gray-800">Paid Events</span>
          </label>
        </div>
      </div>
      <button onClick={handleApplyFilter} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Apply Filters</button>
    </div>
  );
};

export default FilterPage;

