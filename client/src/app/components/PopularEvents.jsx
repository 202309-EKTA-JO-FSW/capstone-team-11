"use client";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";

export default function PopularEvents() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:3001/api/events/find/popular?limit=6"
  );
  const imagesArr = [
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
    "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
    "https://images.unsplash.com/photo-1665203346529-39b7a7bd7496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxTcG9ydHMlMkMlMjBTdGFkaXVtJTJDJTIwQ29tcGV0aXRpb258ZW58MXx8fHwxNzA3MzU5MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1665203346529-39b7a7bd7496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxTcG9ydHMlMkMlMjBTdGFkaXVtJTJDJTIwQ29tcGV0aXRpb258ZW58MXx8fHwxNzA3MzU5MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1698678302429-3a63d3d90652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxUaGVhdGVyJTJDJTIwRHJhbWElMkMlMjBBY3Rpbmd8ZW58MXx8fHwxNzA3MzU5MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1525373612132-b3e820b87cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxGZXN0aXZhbCUyQyUyMENlbGVicmF0aW9uJTJDJTIwRnVufGVufDF8fHx8MTcwNzM1OTEzOXww&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  const eventsArr = [
    "Concerts",
    "Conferences",
    "Theater",
    "Sports",
    "Exhibitions",
    "Festivals",
  ];
  return (
    <div className=" mx-16 md:mx-16 pt-20 p-4">
      <div className="block text-xl leading-[30px] font-extrabold text-[#030303] dark:text-white">
        Popular Events
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="grid sm:auto-rows-[176px] auto-rows-[352px]  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-4">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((event, i) => (
                <div
                  key={i}
                  className={`col-span-1 rounded-xl  bg-neutral-100 p-4 dark:bg-neutral-900 ${
                    i === 0 || i === 2 ? "row-span-2" : ""
                  } group relative flex items-end overflow-hidden bg-gray-100 shadow-lg`}
                >
                  <Link href={`/event/${event._id}`}>
                    <img
                      src={event?.imageUrl}
                      alt={`Image ${i + 1}`}
                      className="absolute  inset-0 h-full w-full rounded-lg object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <button className="relative rounded-xl text-center align-middle font-sans font-medium bg-gray-950 text-white transition-all hover:bg-gray-800 active:bg-gray-900 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 ml-4 mb-3 inline-block text-lg md:ml-5 md:text-lg">
                      {event?.title}
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p>No events available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
