// import React from "react";

// export default function page() {
//   return <div>event page</div>;
// }

"use client";
import Footer from "@/app/components/Footer";
import useFetch from "@/hooks/useFetch";
import NavBar from "@/app/components/NavBar";
import { usePathname } from "next/navigation";
import { StarIcon } from "@heroicons/react/solid";

function EventPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop().replace(/"/g, "");
  console.log({ id });

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:3001/api/events/${id}`
  );

  console.log({ data });
  const event = data;

  return (
    <>
      <NavBar />

      {loading ? (
        "Loading..."
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={data.imageUrl}
                    alt={data.title}
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {data.title}
                  </h2>

                  <span className="flex items-center justify-center text-2xl">
                    <p className="font-bold text-gray-700 dark:text-gray-300 mx-2">
                      Rating: {event.rating}
                    </p>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`w-8 h-8 ${
                          index < Math.round(event.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } mr-1`}
                      />
                    ))}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-2xl my-4">
                  {data.description}
                </p>
                <div className=" mb-4 text-xl flex justify-between">
                  <div className="">
                    <div className="flex justify-start">
                      <span className="font-bold text-gray-700 dark:text-gray-300 mx-2">
                        Start Date:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 mr-4">
                        {new Date(data.startDateTime).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300 mx-2">
                        End Date:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-">
                        {new Date(data.endDateTime).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="mr-4 text-2xl">
                    <span className="font-bold text-gray-700 dark:text-gray-300 mx-2">
                      Price:
                    </span>
                    <span className="font-extrabold text-gray-600 dark:text-gray-300 text-xl">
                      {data.isFree ? "Free" : `$${data.price}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center -mx-2 mb-4">
              <div className="w-1/3  px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Purchase Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default EventPage;
