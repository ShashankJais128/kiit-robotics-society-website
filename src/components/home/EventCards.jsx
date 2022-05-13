import React from "react";
import Card from "./Card";

function EventCards() {
  
  return (
    <div className="bg-cover bg-[url('C:\Users\KIIT\OneDrive\Desktop\KRS_WEB\kiit-robotics-society-website\src\public\bg.png')] py-5">
      <div>
        <h1 className="text-center font-poppins text-4xl font-bold py-6 text-amber-400">
          Events
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 rounded text-xl font-semibold ml-5">
            All
          </button>
        </h1>
      </div>
      <div className="flex my-10 mx-14 justify-center">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default EventCards;
