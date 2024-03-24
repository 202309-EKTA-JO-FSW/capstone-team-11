import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function UserProfile() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center mt-20 px-8">
        <form className="max-w-full">
          <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">
              User Profile
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full border-gray-400 items-center">
              <div className="pr-6">
                <img
                  className="block w-36 h-32 rounded-lg" // Increase the height to make it taller
                  src="https://tailwindcss.com/img/erin-lindford.jpg"
                  alt="Woman's Face"
                />
              </div>
              <div className="flex flex-col w-full">
                <div>
                  <label className="text-gray-600 dark:text-gray-400">
                    User name:
                  </label>
                  <input
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-gray-600 dark:text-gray-400">
                    Email:
                  </label>
                  <input
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Show Ticket Section */}
            <div className="mt-8">
              <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">
                Show Ticket
              </h2>
              {/* Add your "Show Ticket" content here */}
              <p>
                This is where you can display the user's ticket information.
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="py-1.5 px-3 m-1 text-center bg-black border rounded-md text-white hover:bg-gray-800 dark:text-gray-200 dark:bg-black"
                type="submit"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
