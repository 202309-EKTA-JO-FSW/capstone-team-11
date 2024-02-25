import React from "react";

export default function button({ title, addClassName }) {
  return (
    <button
      type="button"
      className={`text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 md:me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700 ${addClassName}`}
    >
      {title}
    </button>
  );
}
