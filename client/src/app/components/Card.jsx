import React from "react";

export default function Card({ reviews, eventName, eventPlace, price }) {
  return (
    <div>
      <div className="relative my-4 flex flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-lg dark:bg-gray-700 dark:text-gray-200">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white bg-gray-950 transition-all hover:bg-gray-800 active:bg-gray-900"
            type="button"
            data-ripple-dark="true"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform  ">
              <svg
                className=" h-4 w-4 text-sm fill-white text-white"
                viewBox="0 0 576 512"
              >
                <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
              </svg>
            </span>
          </button>
          <button
            className="!absolute top-4 left-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase bg-gray-950 text-white transition-all hover:bg-gray-800 active:bg-gray-900 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              {reviews}
            </span>
          </button>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
              {eventName}
            </h5>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased  dark:text-gray-200">
            {eventPlace}
          </p>
        </div>
        <div className="p-6 pt-3">
          <button
            className="w-full select-none rounded-lg text-center align-middle font-sans text-lg font-bold text-black dark:text-gray-200 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex justify-between"
            type="button"
            data-ripple-light="true"
          >
            <span>from ${price}/ticket</span>{" "}
            <span className="text-2xl">{">"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
