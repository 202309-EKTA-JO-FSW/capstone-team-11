import React from "react";
import EventCard from "./EventCard"; // Import your EventCard component
import Sidebar from "../sidebar/sidebarfilter";// Import your SidebarFilter component

export default function EventList() {
  // Dummy data for event cards
  const eventData = [
    { eventName: 'Event 1', eventRating: '4.5' },
    { eventName: 'Event 2', eventRating: '4.2' },
    { eventName: 'Event 3', eventRating: '4.8' },
    // Add more dummy data as needed
  ];

  
  return (
    <div className="pt-4 bg-white text-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="px-8 md:px-16 py-4 block text-xl leading-[30px] text-[#030303] dark:text-white font-extrabold">
        Featured Events
      </div>
      <div className="flex justify-between">
        <Sidebar /> {/* Place your SidebarFilter component on the left */}
        <div className="flex flex-wrap gap-4">
          {/* Use flexbox layout to display event cards */}
          {eventData.map((event, index) => (
            <EventCard key={index} eventName={event.eventName} eventRating={event.eventRating} />
          ))}
        </div>
      </div>
    </div>
  );
}
