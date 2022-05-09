<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'

const homePageData = [
  {
    img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    heading1: "KIIT ROBOTICS SOCIETY",
    heading2: "Ideas that enlighten",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quam exercitationem architecto in ipsam aliquid atque, consectetur quasi cum repellendus odit alias aperiam corporis? Doloribus!"
  },
  {
    img: "https://user-images.githubusercontent.com/88647567/150991382-9fe442a8-0b36-4294-a4bd-fb3fbf590e18.jpg",
    heading1: "Robotics",
    heading2: "Ideas that enlightenhsvs",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quam exercitationem architecto in ipsam aliquid atque, consectetur quasi cum repellendus odit alias aperiam corporis? Doloribus!"
  }
];


=======
import React from "react";
import Footer from "../footer/Footer";
>>>>>>> 57c6e0d36565d9b4e5511654d84a70def233ed43
function HomeMain() {
  let count = 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    startSlider();
  }, [])
  
  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 3000);
  }

  const handleOnNextClick = () => {
    count = (count + 1) % homePageData.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const dataLength = homePageData.length;
    count = (currentIndex + dataLength - 1) % dataLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };


  return (
<<<<<<< HEAD
    <div ref={slideRef} className="w-full select-none relative">
      <div className="h-[100vh] bg-cover bg-left" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homePageData[currentIndex].img})`}}>
        <div className="pl-20 pt-40">
          <h1 className="text-7xl font-bold text-yellow-500">{homePageData[currentIndex].heading1}</h1><br />
          <h2 className="text-5xl font-semibold text-white">{homePageData[currentIndex].heading2}</h2><br />
          <p className="w-1/3 text-xl text-white">{homePageData[currentIndex].description}</p>
        </div>
      </div>
      {/* <img className="h-[100vh] w-full" src={homePageData[currentIndex]} alt="img1" /> */}
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex  justify-between items-center">
        <button className="text-4xl font-extrabold" onClick={handleOnPrevClick}>&#8678;</button>
        <button className="text-4xl font-extrabold" onClick={handleOnNextClick}>&#8680;</button>
      </div>
    </div>
  )
=======
    <div>
      Homemain
    </div>
  );
>>>>>>> 57c6e0d36565d9b4e5511654d84a70def233ed43
}

export default HomeMain;
