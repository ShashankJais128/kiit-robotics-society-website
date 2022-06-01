import React from 'react'
import PP from "../../public/pp.jpeg"

const achievementsData = [
  {
    img1: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    img2: "https://user-images.githubusercontent.com/88647567/150991382-9fe442a8-0b36-4294-a4bd-fb3fbf590e18.jpg",
    position: "2nd",
    year: "2019",
    teamName: "Technocrats",
    eventName1: "Treckon",
    eventName2: "Teck Fest",
    eventPlace: "IIT BBSR"
  }
  
];

function AhievementsMain() {
  return (
    <div className='bg-black'>
      
        <h1 className='text-center text-6xl font-bold pt-6 px-10 text-yellow-500'>Achievements</h1>
        <div className='flex h-[75vh] px-10 py-10 justify-between border-2'>
          <div className='text-white w-1/2 py-10 px-10 flex flex-col border-2 justify-between'>
            <div>
              <h1 className='text-5xl font-semibold pb-8 text-yellow-500'>Team <br />Technocrats</h1><br />
              <h2 className='text-3xl'>Participated by: </h2><br />
              <h2 className='text-xl'>Ram Kumar <br />Ram Kumar <br />Ram Kumar <br /> Ram Kumar</h2>
            </div>
          </div>
          {achievementsData.map((achievementsData) => {
              return (
                <div className='w-1/2 py-10 px-20 border-2 flex relative justify-center items-center'>
            <div className='h-2/3 z-0 absolute left-10 blur-[2px] w-[70%] bg-cover rounded-2xl border-4' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${achievementsData.img1})`}}>
              <div className='h-1/2 bg-gradient-to-r from-yellow-500 to-gray-900 rounded-2xl'>
                <div className='h-1/2 flex justify-between items-center px-4 bg-gradient-to-r from-gray-900 to-gray-600 rounded-2xl'>
                  <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.position}</h1>
                  <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.year}</h1>
                </div>
                <div className='px-4 flex justify-between items-center'>
                  <h1 className='text-3xl font-bold text-white'>Team <br /> {achievementsData.teamName}</h1>
                  <h1 className='text-lg font-bold text-white'>{achievementsData.eventName1} <br /> {achievementsData.eventName2} <br />{achievementsData.eventPlace}</h1>
                </div>
              </div>
            </div>

            <div className='h-4/5 z-10 absolute w-[70%] bg-cover rounded-2xl border-4' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${achievementsData.img2})`}}>
              <div className='h-1/2 bg-gradient-to-r from-yellow-500 to-gray-900 rounded-2xl'>
                <div className='h-1/2 flex justify-between items-center px-4 bg-gradient-to-r from-gray-900 to-gray-600 rounded-2xl'>
                  <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.position}</h1>
                  <h1 className='text-3xl font-bold text-gray-400'>{achievementsData.year}</h1>
                </div>
                <div className='px-4 flex justify-between items-center'>
                  <h1 className='text-3xl font-bold text-white'>Team <br /> {achievementsData.teamName}</h1>
                  <h1 className='text-lg font-bold text-white'>{achievementsData.eventName1} <br /> {achievementsData.eventName2} <br />{achievementsData.eventPlace}</h1>
                </div>
              </div>
            </div>
          </div>
              )
            })}
         
        </div>
      
    </div>
  )
}

export default AhievementsMain