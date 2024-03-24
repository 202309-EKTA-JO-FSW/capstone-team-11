"use client";
import React, { useState } from "react";
import Card from "./Card";
import useFetch from "@/hooks/useFetch";
import Button from "./Button";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function FeaturedEvent() {
  const [eventType, setEventType] = useState("free");
  const { data, loading, error } = useFetch(
    `http://127.0.0.1:3001/api/events/find/${eventType}`
  );
  const handleFreeEvents = () => {
    setEventType("free");
  };

  const handlePaidEvents = () => {
    setEventType("paid");
  };
  return (
    <div className="pt-4 bg-white text-gray-800 dark:bg-gray-950 dark:text-white mx-auto">
      <div className=" md:px-16 py-4  text-xl leading-[30px] text-[#030303] dark:text-white font-extrabold mx-16 flex flex-wrap">
        Featured Events
        <div className="mt-4">
          <Button
            onClick={handleFreeEvents}
            addClassName="mx-4"
            title="Free Events"
          />
          <Button onClick={handlePaidEvents} title="Paid Events" />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-1 lg:grid-cols-5 xl:grid-cols-5 md:gap-4 lg:gap-4 xl:gap-4 w-11/12 mx-auto sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 ">
        {loading ? (
          <>
            {[...Array(5)].map((_, i) => (
              <Card
                key={i}
                reviews="0.0"
                img="https://placehold.co/600x400?text=Event+Master"
                eventName="Event's Title"
                eventPlace="Event's Location"
                price="Event's price"
              />
            ))}
          </>
        ) : (
          <>
            {data && data.length > 0 ? (
              data.slice(-6, -1).map((event, i) => (
                <Link href={`/event/${event._id}`} key={i}>
                  <Card
                    reviews={event?.rating ? event?.rating : "0.0"}
                    img={
                      event?.imageUrl
                        ? event?.imageUrl
                        : "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    }
                    eventName={event?.title}
                    eventPlace={event?.location}
                    price={event?.price ? event?.price : "Free"}
                  />
                </Link>
              ))
            ) : (
              <p>No events available</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
