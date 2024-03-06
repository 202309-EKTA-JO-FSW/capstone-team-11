"use client";
import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="relative pb-72 sm:pb-32 md:pb-0 ">
      <section className="absolute z-10  inset-0 flex flex-col items-center justify-center text-white text-center tracking-wide mb-72 md:mb-0">
        <p className=" font-bold text-xl md:text-[40px] leading-[60px]">
          Discover Exciting Events
        </p>
        <p className=" font-medium text-sm md:text-xl leading-8">
          Find Your Next Experience!
        </p>
      </section>
      <img
        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
        alt="Hero Section Image"
        className=" object-cover w-11/12 h-[290px] rounded-xl mx-auto mt-4"
      />
      <form
        id="searchBar"
        action=""
        method="post"
        className="absolute top-52 z-10 inset-0 w-9/12 sm:w-10/12 md:w-8/12 mx-auto"
      >
        <div className="pl-4 mb-40 rounded-lg md:rounded-[100px] bg-[#f0f0f0] dark:bg-gray-700 mx-auto my-12  grid justify-center  md:flex md:justify-between md:items-center">
          <span className="md:divide-x-2 md:divide-[#dedede] grid grid-cols-12 gap-4 ">
            <section className="ms-10 sm:ms-8 md:ms-4  pt-4 md:pt-0 col-span-12 sm:col-span-6 md:col-span-3">
              <h3 className="font-medium text-[#030303] dark:text-white text-sm leading-[22px]">
                Location
              </h3>
              <input
                className=" font-light text-[#030303] dark:text-white  text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700 outline-none w-11/12"
                placeholder="Where"
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4  md:px-4 pt-4 md:pt-0 col-span-12 sm:col-span-6 md:col-span-3">
              <h3 className="font-medium text-[#030303] dark:text-white  text-sm leading-[22px]">
                Date
              </h3>
              <input
                className="font-light text-[#030303] dark:text-white text-wrap  text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700 outline-none w-11/12"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                type="text"
                width="3/5dvw"
                placeholder="Select"
                required
                pattern="\d{2}-\d{2}-\d{2}"
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4  pb-4 md:pb-0 md:px-4  col-span-12 sm:col-span-6 md:col-span-3">
              <h3 className="font-medium text-[#030303] dark:text-white  text-sm leading-[22px]">
                Time
              </h3>
              <input
                className=" font-light text-[#030303] dark:text-white  text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700  outline-none w-11/12"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.type = "text")}
                type="text"
                width="3/5dvw"
                placeholder="Select"
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4 md:px-4 col-span-12 sm:col-span-6 md:col-span-3 text-wrap">
              <h3 className="font-medium text-[#030303] dark:text-white  text-sm leading-[22px]">
                Guests
              </h3>
              <input
                className=" font-light text-[#030303] dark:text-white text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700 outline-none text-wrap w-11/12"
                placeholder="Number of attendees"
                type="number"
              />
            </section>
          </span>
          <section className="ms-20 sm:ms-52 md:mx-4 col-span-12 md:col-span-3">
            <Button
              title={
                <svg
                  className=" text-2xl w-7 h-7 text-white fill-white"
                  viewBox="0 0 448 512"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              }
              addClassName="mr-4 my-3 hover:bg-gray-900"
            />
          </section>
        </div>
      </form>
    </div>
  );
}
