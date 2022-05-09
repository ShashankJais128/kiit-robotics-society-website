import React from "react";
import FG from "./FeaturedGrid";


function HomeFeatured() {
  return (
    <div className="bg-cover bg-[url('C:\Users\KIIT\OneDrive\Desktop\KRS_WEB\kiit-robotics-society-website\src\public\dronebackground.jpg')] py-5">
      <h1 className="text-center font-poppins text-4xl font-bold py-6 text-white">
        Featured Works
        <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 rounded text-xl font-semibold ml-5">
          All
        </button>
      </h1>
      <div>
      <div className="flex m-5">
        <FG ht="360px"/>
        <FG ht="310px"/>
        <FG />
      </div>

      <div className="flex  m-5">
        <FG />
        <FG />
        <FG />
      </div>
      </div>
    </div>
  );
}

export default HomeFeatured;
