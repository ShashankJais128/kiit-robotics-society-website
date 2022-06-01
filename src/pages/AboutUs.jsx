import React from "react";
import AboutUsCard from "../components/about/AboutUsCard";
import Motto from "../components/about/Motto";
import AB1 from "../public/ab1.jpg"

function AboutUs() {
  return (
    <div className="bg-cover bg-black bg-top py-10" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${AB1})`}}>
     
      <h1 className="text-center text-5xl font-Roboto font-bold pt-6 px-10 text-yellow-500">
        ABOUT KIIT ROBOTICS SOCIETY
      </h1>
      <AboutUsCard />
      <h1 className="text-center text-5xl font-Roboto font-bold pt-6 px-10 text-yellow-500">
        Our Motto
      </h1>
      <Motto />
    </div>
  );
}

export default AboutUs;