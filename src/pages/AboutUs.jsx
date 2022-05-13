import React from "react";
import AboutUsCard from "../components/about/AboutUsCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Motto from "../components/about/Motto";

function AboutUs() {
  return (
    <div className="bg-cover bg-[url('C:\Users\KIIT\OneDrive\Desktop\KRS_WEB\kiit-robotics-society-website\src\public\bg.png')] py-5">
      <Navbar />
      <h1 className="text-center text-5xl font-Roboto font-bold pt-6 px-10 text-yellow-500">
        ABOUT KIIT ROBOTICS SOCIETY
      </h1>
      <AboutUsCard />
      <h1 className="text-center text-5xl font-Roboto font-bold pt-6 px-10 text-yellow-500">
        Our Motto
      </h1>
      <Motto />
      <Footer />
    </div>
  );
}

export default AboutUs;
