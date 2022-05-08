import React from 'react'
import PP from "../../public/pp.jpeg"

function HomeTestimonials() {
  return (
    <div className='bg-black'>
        <h1 className='text-center text-6xl font-bold pt-6 px-10 text-yellow-500'>Testimonials</h1>
        <h1 className='text-center text-4xl font-bold pt-6 px-10 text-white'>What ❤️ KIITians Say</h1>
        <div className='flex px-32 pt-10 pb-10 justify-between'>
            <div className='rounded-lg bg-white flex flex-col justify-between w-80 h-64 p-4'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt similique. Praesentium expedita recusandae mollitia!"</p>
                <div className='flex space-x-4 items-center'>
                    <div>
                        <img className='w-16 h-16 rounded-full' src={PP} alt="" />
                    </div>
                    <div>
                        <h1>Shashank Jaiswal</h1>
                        <h2>Web Developer</h2>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-lg bg-white flex flex-col justify-between w-80 h-64 p-4'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt similique. Praesentium expedita recusandae mollitia!"</p>
                <div className='flex space-x-4 items-center'>
                    <div>
                        <img className='w-16 h-16 rounded-full' src={PP} alt="" />
                    </div>
                    <div>
                        <h1>Shashank Jaiswal</h1>
                        <h2>Web Developer</h2>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-lg bg-white flex flex-col justify-between w-80 h-64 p-4'>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt similique. Praesentium expedita recusandae mollitia!"</p>
                <div className='flex space-x-4 items-center'>
                    <div>
                        <img className='w-16 h-16 rounded-full' src={PP} alt="" />
                    </div>
                    <div>
                        <h1>Shashank Jaiswal</h1>
                        <h2>Web Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTestimonials