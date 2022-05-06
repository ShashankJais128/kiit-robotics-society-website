import React from "react";
import FG from "./FeaturedGrid";
import d1 from "../../public/d1.png";

function FeaturedMain() {
  return (
    <div className="w-full bg-black">
      <h1 className="text-center font-poppins text-4xl font-bold py-6 text-white">
        Featured Works
        <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 rounded text-xl font-semibold">
          All
        </button>
      </h1>

      <section class="overflow-hidden text-gray-700 ">
  <div class="container py-2  lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3 mr-4">
        <div class="w-full p-1 md:p-2 border-2 border-white rounded-lg ">
          <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2 border-2 border-white rounded-lg">
        <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3 border-2 border-white rounded-lg">
        <div class="w-full p-1 md:p-2">
        <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2 border-2 border-white rounded-lg">
        <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2 border-2 border-white rounded-lg">
        <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2 border-2 border-white rounded-lg">
        <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={d1} />
        </div>
      </div>
    </div>
  </div>
</section>

      <br></br>
      <br></br>
    </div>
  );
}

export default FeaturedMain;
