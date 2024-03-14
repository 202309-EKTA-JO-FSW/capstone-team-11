import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col items-center mt-20 p-20 text-base leading-6 font-['Poppins'] text-[rgb(55, 65, 81)]">
      <form className="max-w-full">
        <div className="grid border shadow rounded-lg p-20 bg-gray-100 dark:bg-white">
          <h2 className="text-2xl text-gray-700 text-center sm:my-[-3rem] mx-[1rem] mt-[-3rem] mb-4">USER PROFILE</h2>

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
                <label className="block text-gray-700 mb-2">User Name</label>
                <input
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-white dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 mt-4">Email Address</label>
                <input
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-white dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Show Ticket Section */}
          <div className="mt-8">
            <h2 className="block text-gray-700 mb-2">Show Ticket</h2>
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
  );
}

export default UserProfile;