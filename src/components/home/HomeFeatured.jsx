import React from "react";
import FG from "./FeaturedGrid";
import dbg from '../../public/dronebackground.jpg'
import watch from "../../public/watch.jpg";


function HomeFeatured() {
  return (
    <section class="overflow-hidden text-gray-700">
     <div className="bg-cover bg-black py-5" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${dbg})`}}>
       <h1 className="text-center font-poppins text-4xl font-bold py-6 text-white">
        Featured Works
        <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 rounded text-xl font-semibold ml-5">
          All
       </button>
     </h1>
       {/* <div>
//       <div className="flex m-5">
//         <FG />
//         <FG />
//         <FG />
//       </div>

//       <div className="flex  m-5">
//         <FG />
//         <FG />
//         <FG />
//       </div>
//       </div>
//     </div>
//   );
// } */}


  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={watch} />
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

  )
}

export default HomeFeatured;
