import React, { useState } from 'react';
import { sidebarStyles } from './sidebarStyles';
import EventList from '../event/EventList';

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: '',
    startDate: '',
    endDate: '',
    guests: 0,
    eventType: '',
    priceFilters: [],
    categoryFilters: [],
  });

  const handleFilterChange = (filter) => {
    // Update the filters state
    setFilters({ ...filters, ...filter });

    // Pass the filters to the parent component
    onFilterChange({ ...filters, ...filter });
  };



  const jordanCities = ['Amman', 'Irbid', 'Zarqa', 'Aqaba', 'Madaba', 'Salt', 'Jerash', 'Karak', 'Ma\'an', 'Tafilah', 'Mafraq'];

  // Function to reset selected filters
  const resetFilters = () => {
    // Implement your logic to reset the filters here
    console.log('Resetting filters...');
  };

  // Dummy events data
  const dummyEvents = [
    { id: 1, name: 'Event 1', details: 'Lorem ipsum dolor sit amet', price: '$20' },
    { id: 2, name: 'Event 2', details: 'Consectetur adipiscing elit', price: '$10' },
    { id: 3, name: 'Event 3', details: 'Sed do eiusmod tempor incididunt', price: 'Free' },
  ];

  return (
    <div>
      {/* Card for searching events */}
      <div className="pt-6" style={sidebarStyles.Card}>
        {/* Back button */}
        <a href="./" className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50 absolute top-4 left-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" style={sidebarStyles.Icon}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </a>
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-800 mt-7 mx-5">Search for Events</h2>
        {/* Rest of the content */}
        <div className="mt-6 mx-4">
          {/* Location */}
          <label htmlFor="location" className="block mb-2 font-medium text-gray-700">Location</label>
          <select id="location" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Location</option>
            {jordanCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          {/* Event dates */}
          <label className="block mt-4 mb-2 font-medium text-gray-700">Event Dates</label>
          <div className="flex">
            <input type="date" className="w-1/2 mr-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Start Date" />
            <input type="date" className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="End Date" />
          </div>

          {/* Number of guests */}
          <label className="block mt-4 mb-2 font-medium text-gray-700">Number of Guests</label>
          <input type="number" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" min="1" />

          {/* Event type */}
          <label className="block mt-4 mb-2 font-medium text-gray-700">Event Type</label>
          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Event Type</option>
            <option value="1">Type 1</option>
            <option value="2">Type 2</option>
            <option value="3">Type 3</option>
            {/* Add more options as needed */}
          </select>

          {/* Search button */}
          <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Search
          </button>
        </div>
      </div>
     {/* Card for filters and reset button */}
     <div className="pt-6" style={sidebarStyles.Card}>
     <button onClick={resetFilters} className="absolute top-4 right-4 font-semibold text-gray-800 hover:text-indigo-500">Reset</button>
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-800 mt-0 mx-2">Event Filters</h2>
        <div className="mt-6 mx-4">
          {/* Price filter */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Price</label>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input type="checkbox" id="allPrices" className="mr-2" />
                <label htmlFor="allPrices" className="mr-4">All Prices</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="tickets" className="mr-2" />
                <label htmlFor="tickets" className="mr-4">Tickets</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="free" className="mr-2" />
                <label htmlFor="free" className="mr-4">Free</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="registration" className="mr-2" />
                <label htmlFor="registration">Registration</label>
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Category</label>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input type="checkbox" id="allCategories" className="mr-2" />
                <label htmlFor="allCategories" className="mr-4">All Categories</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="culture" className="mr-2" />
                <label htmlFor="culture" className="mr-4">Culture &amp; Arts</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="entertainment" className="mr-2" />
                <label htmlFor="entertainment" className="mr-4">Entertainment</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="business" className="mr-2" />
                <label htmlFor="business" className="mr-4">Business</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="sports" className="mr-2" />
                <label htmlFor="sports" className="mr-4">Sports &amp; Outdoors</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="family" className="mr-2" />
                <label htmlFor="family">Family &amp; Kids</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
