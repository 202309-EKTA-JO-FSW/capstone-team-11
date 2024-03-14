import React from 'react'
const EventForm = () => {

  return (
    <div className=" min-h-screen font-['Poppins'] text-[rgb(55, 65, 81)]">
        <h1 className=' text-center'>Submit a new Event</h1>
  
  <div className=" bg-gray-100 pb-10 rounded-lg shadow border mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl min-w-min ">

    <form className='flex flex-col justify-center items-center w-full' action="http://localhost:3001/events" method='post' enctype="multipart/form-data">

      
      <div className=" w-full px-4 flex flex-col mx-4  mb-3">
        <div className=" w-full   py-2  leading-4">Event's Title:</div>
        <input type="text" name="title" placeholder="Title" 
               className=" w-full px-4 h-12  border-gray-300 border box-border rounded-lg bg-opacity-8   font-poppins   bg-white outline-none"></input>
      </div>

      <div className=" w-full px-4 flex flex-col mx-4  mb-3">
      <div className=" w-full    py-2  leading-4">Description:</div>
        <textarea id="description" name="description" placeholder="Description" 
               className=" w-full px-4 min-h-40 resize-y h-12 border  border-gray-300 rounded-md bg-opacity-80 bg-white text-gray-800 text-base font-poppins  outline-none"></textarea>
      </div>
{/* 
      <div className=" w-full px-4 flex items-center mb-3">
        <label for="number" className=" w-full px-4 inline-block mr-6 text-right 
                                 font-bold text-gray-600">Range</label>
        <input type="range" id="range" name="range" placeholder="range" 
               className=" w-full px-4 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"></input>
      </div> */}

      <div className=" w-full px-4 flex flex-col mx-8  my-5">
      <div className=" w-full    py-2 pb  leading-4">Choose photos:</div>
        <input type="file" name="images" placeholder="file" accept='image/*' 
               className=" px-4 block w-full  text-slate-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file: file:font-semibold
               file:bg-[#030303] file:text-[#f0f0f0]
               " multiple></input>
      </div>
      <div className=" w-full px-4 flex flex-col mx-4  mb-3">
      <div className=" w-full    py-2  leading-4">Location:</div>
        <select name='location' className=" w-full px-4 resize-y h-12 border  border-gray-300 rounded-md bg-opacity-80 bg-white text-gray-800 text-base font-poppins  outline-none">
            <option>Amman</option>
            <option>Ajloun</option>
            <option>Aqaba</option>
            <option>Balqa</option>
            <option>Jerash</option>
            <option>Irbid</option>
            <option>Mafraq</option>
            <option>Madaba</option>
            <option>Karak</option>
            <option>Tafilah</option>
            <option>Ma'an</option>
            <option>Zarqa</option>
        </select>
      </div>
      
      <div name='location' className=" w-full px-4 flex flex-col mx-4  mb-3">
        <div className=" w-full   py-2  leading-4">Address:</div>
        <input type="text" id="address" name="address" placeholder="Address" 
               className=" w-full px-4   h-12  border-gray-300 border box-border rounded-lg bg-opacity-8   font-poppins   bg-white outline-none"></input>
      </div>

      <div className=" w-full px-4 flex flex-col mx-4  mb-3">
      <div className=" w-full   py-2  leading-4">Date:</div>
        <input type="date" max="2025-12-31" id="date" name="date" placeholder="date" 
               className=" w-full px-4  h-12 border-gray-300 border box-border rounded-lg bg-opacity-8   font-poppins   bg-white outline-none"></input>
      </div>

      {/* <div className=" w-full px-4 flex items-center mb-5">
        <label for="number" className=" w-full px-4 inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Month</label>
        <input type="month" id="month" name="month" placeholder="month" 
               className=" w-full px-4 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"></input>
      </div> */}

      <div className=" w-full px-4 flex flex-col mx-4  mb-3">
      <div className=" w-full   py-2  leading-4">Time:</div>
        <input type="time" id="time" name="time" placeholder="time" 
               className=" w-full px-4 h-12 border-gray-300 border box-border rounded-lg bg-opacity-8   font-poppins   bg-white outline-none"></input>
      </div>

      <div className=" w-full px-4 flex items-center mb-5">
        <div className="   py-2  leading-4">Number Of Guests:</div>
        <input type="number" min={0} name="guests" placeholder="Number Of Guests" 
               className=" w-full px-4 h-12 border-gray-300 border box-border rounded-lg bg-opacity-8   font-poppins   bg-white outline-none"></input>
      </div>
      <div className=" w-full">
    <div className="flex flex-col justify-center ">
    <div className=" w-ful text-center  py-2  leading-4 self-start ml-4">Catagories:</div>
    <div className="grid grid-cols-2 gap-x-0 gap-y-2 items-center">

            <label className="flex justify-center  mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 " name='concert' value='concert'></input><span className="ml-2 ">Concert</span>
            </label>

            <label className="inline-flex justify-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 " name='conference' value='conference'></input><span className="ml-2 ">Conference</span>
            </label>

            <label className="inline-flex justify-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 " name='exhibition' value='exhibition'></input><span className="ml-2 ">Exhibition</span>
            </label>

            <label className="inline-flex justify-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 " name='sport' value='sport'></input><span className="ml-2 ">Sport</span>
            </label>

            <label className="inline-flex justify-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5" name='theater' value='theater'></input><span className="ml-2 ">Theater</span>
            </label>

            <label className="inline-flex justify-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 " name='festival' value='festival'></input><span className="ml-2 ">Festival</span>
            </label>

        </div>
    </div>
</div>

      

      <div  className=" flex flex-col items-center pt-10 w-full px-4 ">
        <button type="submit" className="  px-4 cursor-pointer  w-48 min-w-20 max-w-72 h-10  border-0 box-border rounded-lg bg-gray-900 text-white text-base font-poppins leading-5 outline-none">Submit</button> 
      </div>

    </form>
  </div>
</div>
  )
}

export default EventForm