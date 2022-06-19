import React from "react";
import FG from "./FeaturedGrid";
import dbg from "../../public/dronebackground.jpg";
import watch from "../../public/watch.jpg";

function HomeFeatured() {
  return (
    <section class="overflow-hidden text-gray-700">
      <div className="bg-cover bg-black pb-10" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${dbg})`,}}>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500">Featured Works
          <button className="bg-yellow-500 w-fit self-center px-4 ml-5 text-black font-semibold text-2xl rounded-lg">All</button>
        </h1>

        <div class="py-10 px-[5%]">
          <div class="flex flex-wrap flex-col lg:flex-row">
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div class="w-full p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div class="w-full p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
              <div class="w-1/2 p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={watch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatured;
