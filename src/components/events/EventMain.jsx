import React from 'react'
import PP from "../../public/pp.jpeg"
import EveBg from '../../public/events.jpg'

const eventsData = [
  {
    img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    paragrapg: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto voluptate numquam dicta id excepturi dolor, a nihil, voluptatem explicabo sit illo sed nobis maxime. Voluptatum eligendi eius iusto. Provident maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
    eventName: "Drone Workshop",
    date: "2022-06-21",
    venue: "KRS ROOM",
  },
  
  {
    img: "https://user-images.githubusercontent.com/88647567/166467933-2b3a2dab-8477-4ed1-8f4e-54c382342305.jpeg",
    paragrapg: "t maiores numquam perferendis tempore voluptas consectetur molestiae et dolores autem repellendus officiis saepe, accusantium impedit minus animi, fugit nulla aspernatur itaque iste! Architecto odio molestias perspiciatis. Optio dolores nesciunt recusandae, delectus sed dolorem praesentium nihil quas sapiente! Voluptatum culpa et ipsam, aliquid magni totam. Mollitia voluptatum expedita obcaecati, natus ipsam alias, aliquam voluptate maiores labore eius quam maxime. Quos quis molestiae at. Reprehenderit cupiditate doloribus, a laudantium iure quis placeat!",
    eventName: "Drone Workshop",
    date: "2022-06-21",
    venue: "KRS ROOM",
  },
];

function EventMain() {
  return (
    <div className='bg-black bg-fixed bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${EveBg})`}}>
      <div>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500'>Events</h1>
        {eventsData.map((eventsData) => {
          return (
            <div className='flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between'>
              <div className='text-white order-2 md:order-1 w-full md:w-2/3 py-10 px-10 flex flex-col justify-between'>
                <div className='flex justify-between items-center flex-col sm:flex-row'>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-4 sm:pb-8 text-center md:text-left text-yellow-500'>{eventsData.eventName}</h1>
                  <div className='pb-4'>
                    <h2 className='text-base md:text-xl text-yellow-500'>{eventsData.date}</h2>
                    <h2 className='text-base md:text-xl text-yellow-500'>{eventsData.venue}</h2>
                  </div>
                </div>
                <div>
                  <p className='text-base sm:text-xl text-justify'>{eventsData.paragrapg}</p><br />
                </div>
                <div className='flex justify-center'>
                  <button className='bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full'>Register</button>
                </div>
              </div>
              <div className='w-[350px] order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2'>
                <img className='w-full h-full rounded-xl' src={eventsData.img} alt="" />
              </div>
            </div>
          )
        })}
        

      </div>
    </div>
  )
}

export default EventMain