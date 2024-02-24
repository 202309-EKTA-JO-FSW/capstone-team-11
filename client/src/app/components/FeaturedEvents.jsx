import React from "react";
import Card from "./Card";
export default function FeaturedEvent() {
  return (
    <div className="pt-4 bg-white text-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="px-8 md:px-16 py-4 block text-xl leading-[30px] text-[#030303] dark:text-white font-extrabold">
        Featured Events
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-1 md:gap-4 w-11/12 mx-auto">
        <Card
          reviews="4.8"
          eventName="Rock Concert"
          eventPlace="City Arena"
          price="50"
        />
        <Card
          reviews="4.8"
          eventName="Rock Concert"
          eventPlace="City Arena"
          price="50"
        />
        <Card
          reviews="4.8"
          eventName="Rock Concert"
          eventPlace="City Arena"
          price="50"
        />
        <Card
          reviews="4.8"
          eventName="Rock Concert"
          eventPlace="City Arena"
          price="50"
        />
        <Card
          reviews="4.8"
          eventName="Rock Concert"
          eventPlace="City Arena"
          price="50"
        />
      </div>
    </div>
  );
}
