"use client";
import React from "react";
import Header from "./Header";
import EventDetails from "./EventDetails";
import CustomCalendar from "./CustomCalendar";
import TimeDropdown from "./TimeDropdown";
import BookButton from "./BookButton";

const BookingPage = () => {
  return (
    <div className=" bg-gray-100 mb-16">
      <Header />
      <EventDetails />
      <CustomCalendar />
      <TimeDropdown />
      <BookButton />
    </div>
  );
};

export default BookingPage;
