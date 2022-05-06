import React from 'react'
import PP from "../../public/pp.jpeg"

function HomeAchievements() {
  return (
    <div className='bg-black flex flex-col pb-10'>
        
        <h1 className='text-center text-6xl font-bold pt-6 px-10 text-yellow-500'>Achievents</h1>
        <div className='flex justify-between px-32 pt-10 pb-10'>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>Technovator</h1>
                    <h2 className='text-white text-sm'>Trechon teckfest IIT BBSR</h2>
                    <h2 className='text-white text-sm'>2nd position</h2>
                </div>
            </div>
        </div>

        <button className='bg-yellow-500 w-fit self-center py-1 px-2 -skew-x-12'><a href="/featured">Learn more &#8594;</a></button>
    </div>
  )
}

export default HomeAchievements