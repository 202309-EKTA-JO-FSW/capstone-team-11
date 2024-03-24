import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 rounded-md w-11/12 mx-auto shadow border font-['Poppins'] font-bold text-[rgb(55, 65, 81)]">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-1 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold">About Us</h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor.
              Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit
              et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
            </p>
            <div className="mt-8">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
