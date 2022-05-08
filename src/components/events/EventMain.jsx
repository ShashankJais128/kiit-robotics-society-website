import React from 'react'
import PP from "../../public/pp.jpeg"

function EventMain() {
  return (
    <div className='bg-black'>
      <div>
        <h1 className='text-center text-6xl font-bold pt-6 px-10 text-yellow-500'>Events</h1>
        <div className='flex h-[75vh] px-10 py-10 justify-between'>
          <div className='text-white w-2/3 py-10 px-10 flex flex-col justify-between'>
            <div>
              <h1 className='text-4xl font-semibold pb-8'>Drone Workshop</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit voluptate voluptatum quaerat quis harum exercitationem magnam voluptates nemo. Qui optio dolorum pariatur illum sequi cum, illo assumenda delectus magnam animi alias repellat reprehenderit incidunt beatae numquam adipisci rerum aliquid doloribus enim blanditiis quaerat aliquam soluta expedita possimus? Doloremque, commodi aspernatur.</p>
            </div>
            <div>
              <button className='bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full'>Register</button>
            </div>
          </div>
          <div className='w-1/3 py-10 px-20'>
            <img className='w-full h-full rounded-xl' src={PP} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventMain