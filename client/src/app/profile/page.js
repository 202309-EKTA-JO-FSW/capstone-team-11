import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Sidebar from "../components/ProfilePage/Sidebar";

function UserProfile() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row items-center mt-20 p-20">
      <Sidebar addClassName= "max-w-full bg-red-500"/>
      <form className="max-w-full">
        <div className="grid border shadow rounded-lg p-20 bg-white dark:bg-white">
          <h2 className="text-2xl font-semibold text-gray-700 text-center sm:my-[-3rem] mx-[1rem] mt-[-3rem] mb-4">Profile Page</h2>

          <div className="flex flex-col sm:flex-col gap-4 w-full border-gray-400 items-center">
            <div>
              <img
                className="block w-36 h-32 rounded-lg" 
                src="https://tailwindcss.com/img/erin-lindford.jpg"
                alt="Woman's Face"
              />
            </div>
            <div className="flex flex-col w-full">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                <input
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-gray-100 dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Email Address</label>
                <input
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-gray-100 dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Show Ticket Section */}
          <div className="mt-8">
            <h2 className="block text-gray-700 text-sm font-bold mb-2">Show Ticket</h2>
            {/* Add your "Show Ticket" content here */}
            <p>This is where you can display the user's ticket information.</p>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-950 text-white font-bold mx-8 mt-1 -mb-4 p-2 w-full rounded hover:bg-gray-600"
              type="submit"
            >
              Save Changes
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
