"use client";
import React, { useState } from "react";
import Button from "./Button";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Link from "next/link";

const locations = [
  "Amman",
  "Al Mafraq",
  "Irbid",
  "Az Zarqa",
  "Ar Rusayfah",
  "Al Juwayyidah",
  "Sahab",
  "Ar Ramtha",
  "Ajlun",
  "Al Aqabah",
  "Al Jizah",
  "As Salt",
  "Madaba",
  "Jarash",
  "Maan",
  "Al Hisn",
  "At Turrah",
  "Dayr Abu Said",
  "Ash Shajarah",
  "Mu'tah",
  "Ash Shunah ash Shamaliyah",
  "At Tafilah",
  "Al Fuhays",
  "Al Karak",
  "Al Mazar ash Shamali",
  "Muthallath al Azraq",
  "Busayra",
  "Dayr Allan",
  "Al Qatraneh",
  "Al Jafr",
  "Ash Shawbak",
  "Ash Shunah al Janubiyah",
  "Adhruh",
  "Al Abdalli",
  "Marka",
  "Al Jubayhah",
  "Ayn al Basha",
  "Wadi as Sir",
  "Kafr Asad",
  "At Tayyibah",
  "Juraynah",
  "Naur",
  "Irjan",
  "Muthallath Jamiat Al al Bayt",
  "Kufrinjah",
  "Al Hashimiyah",
  "Samma ar Rawsan",
  "Sakhrah",
  "Al Mastabah",
  "Manshiyat Bani Hasan",
  "Hisban",
  "Allan",
  "Umm al Basatin",
  "Al Khalidiyah",
  "Sama as Sirhan",
  "Ayy",
  "Az Zulayl",
  "Al Mazar al Janubi",
  "Umm al Jimal",
  "Balama",
  "Al Husayniyah",
  "Irhab",
  "Mulayh",
  "Fuqu'",
  "Hawsha",
  "Burma",
  "As Subayhi",
  "Al Faysaliyah",
  "Wadi Musa",
  "Umm al Qittayn",
  "Al Qasr",
  "Yarqa",
  "Birayn",
  "Al Mughayyir",
  "Ghawr as Safi",
  "Sabha",
  "Rujm ash Shami al Gharbi",
  "Dhiban",
  "Main",
  "Ayl",
  "Al Muwaqqar",
  "Ghawr al Mazra'ah",
  "Dayr al Kahf",
  "Al A'rid",
  "Muthallath Sabha",
  "Al Husayniyah",
  "Al Hasa",
  "Al Murayghah",
  "Al Quwayrah",
  "Ad Disah",
  "Umm ar Rasas",
  "Ar Rishah",
  "Ar Ruwayshid",
];

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  // const [formData, setFormData] = useState({
  //   destination: "",
  //   date: "",
  //   time: "",
  //   guests: "",
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleDestinationChange = (event) => {
    // setDestination(event.target.value);
    const inputValue = event.target.value.toLowerCase();
    const filtered = locations.filter((location) =>
      location.toLowerCase().includes(inputValue)
    );
    setDestination(event.target.value);
    setFilteredLocations(filtered);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const { data, loading, error, reFetch } = useFetch(
    `http://127.0.0.1:3001/api/events/?destination=${destination}&date=${date}&time=${time}&guests=${guests}`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    reFetch();
    console.log({ destination, date, time, guests });
  };

  const handleAutocompleteSelection = (selectedLocation) => {
    setDestination(selectedLocation);
    setFilteredLocations([]);
  };

  return (
    <div className="relative pb-72 sm:pb-32 md:pb-0 lg:pb-0 xl:pb-0">
      <section className="absolute z-10  inset-0 flex flex-col items-center justify-center text-white text-center tracking-wide mb-72 md:mb-0 lg:mb-0 xl:mb-0">
        <p className=" font-bold text-xl sm:text-[20px]  md:text-[40px] lg:text-[60px] xl:text-[80px] leading-[60px]">
          Discover Exciting Events
        </p>
        <p className=" font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-4xl leading-8 mt-4">
          Find Your Next Experience!
        </p>
      </section>
      <img
        src="https://images.unsplash.com/photo-1510590256405-ddf6bda038e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxTdGFnZSUyQyUyMExpZ2h0cyUyQyUyMFBlcmZvcm1hbmNlfGVufDF8fHx8MTcwNzM1OTEzOXww&ixlib=rb-4.0.3&q=80&w=300"
        alt="Hero Section Image"
        className=" object-cover w-11/12 h-[290px] rounded-xl mx-auto mt-4"
      />
      <form
        id="searchBar"
        className="absolute top-52 z-10 inset-0 w-7/12  mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="pl-4 mb-40 rounded-lg md:rounded-[100px] lg:rounded-[200px] xl:rounded-[300px] bg-[#f0f0f0] dark:bg-gray-700 mx-auto my-12  grid justify-center  md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center">
          <span className="md:divide-x-2 md:divide-[#dedede] lg:divide-x-2 lg:divide-[#dedede] xl:divide-x-2 xl:divide-[#dedede] grid items-center grid-cols-12 gap-4 ">
            <section className=" relative ms-10 sm:ms-8 md:ms-4 lg:ms-8 xl:ms-12  pt-4 md:pt-0 lg:pt-0 xl:pt-0 col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3">
              <h3 className="font-medium text-[#030303] dark:text-white text-sm leading-[22px]">
                Location
              </h3>
              <input
                className=" font-light text-[#030303] dark:text-white  text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700 outline-none w-11/12"
                placeholder="Where"
                value={destination}
                onChange={handleDestinationChange}
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4 lg:ms-8 xl:ms-12  md:px-4 lg:px-4 xl:px-4 pt-4 md:pt-0 lg:pt-0 xl:pt-0 col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3">
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
                pattern="\d{4}-\d{2}-\d{2}"
                value={date}
                onChange={handleDateChange}
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4 lg:ms-8 xl:ms-12  pb-4 md:pb-0 lg:pb-0 xl:pb-0 md:px-4 lg:px-4 xl:px-4  col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3">
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
                value={time}
                onChange={handleTimeChange}
              />
            </section>
            <section className="ms-10 sm:ms-8 md:ms-4 lg:ms-8 xl:ms-12  md:px-4 lg:px-4 xl:px-4 col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 text-wrap">
              <h3 className="font-medium text-[#030303] dark:text-white  text-sm leading-[22px]">
                Guests
              </h3>
              <input
                className=" font-light text-[#030303] dark:text-white text-sm leading-[22px] bg-[#f0f0f0] dark:bg-gray-700 outline-none text-wrap w-full"
                placeholder="Number of attendees"
                type="number"
                value={guests}
                onChange={handleGuestsChange}
              />
            </section>
          </span>
          <section className="ms-0 md:ms-20   md:mx-4 col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <Link href="/sortpage">
              <Button
                type="submit"
                title={
                  <svg
                    className=" text-9xl w-8 h-8 font-extrabold text-white fill-white xs:w-11/12 sm:w-11/12 flex justify-center items-center"
                    viewBox="0 0 448 512"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                }
                addClassName="mr-4 my-3 hover:bg-gray-900 sm:w-full xs:w-full"
              />
            </Link>
          </section>
        </div>
        {filteredLocations.length > 0 && (
          // <ul className=" absolute autocomplete-options border border-t-0 border-gray-300 max-h-48 overflow-y-auto list-none p-0 m-0 bg-slate-100">
          <ul className="z-30 absolute top-28 left-16 w-full rounded-lg   border border-t-0 border-gray-300 max-h-32 max-w-32 sm:max-w-40 md:max-w-48 lg:max-w-56 xl:max-w-64 overflow-y-auto list-none p-0 m-0 bg-slate-50">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleAutocompleteSelection(location)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
