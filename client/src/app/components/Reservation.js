import React from 'react';

function Reservation() {
    return (
        <div className="flex items-center justify-center p-12 font-['Poppins']  text-[rgb(55, 65, 81)]">
            <div className="mx-auto w-full max-w-[550px] bg-gray-100 p-4 rounded-lg shadow border">
                <form>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="fName" className="mb-3 block text-base ">
                                    First Name
                                </label>
                                <input type="text" name="fName" id="fName" placeholder="First Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="lName" className="mb-3 block text-base  ">
                                    Last Name
                                </label>
                                <input type="text" name="lName" id="lName" placeholder="Last Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="guest" className="mb-3 block text-base  ">
                            How many guests are you bringing?
                        </label>
                        <input type="number" name="guest" id="guest" placeholder="5" min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="date" className="mb-3 block text-base  ">
                                    Date
                                </label>
                                <input type="date" name="date" id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="time" className="mb-3 block text-base  ">
                                    Time
                                </label>
                                <input type="time" name="time" id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-base  ">
                            Are you coming to the event?
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                                <label htmlFor="radioButton1" className="pl-3 text-base  ">
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                                <label htmlFor="radioButton2" className="pl-3 text-base  ">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            className="hover:shadow-form rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservation;