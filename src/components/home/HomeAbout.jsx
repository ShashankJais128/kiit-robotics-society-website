import React from 'react'
import PP from "../../public/pp.jpeg"
import AB1 from "../../public/ab1.jpg"

function HomeAbout() {
  return (
    <div className=' bg-black bg-cover bg-top'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${AB1})`}}>
        {/* about text  */}
        <div className='flex flex-col items-center pt-6 px-10 ' >
            <h1 className='text-center text-6xl font-bold text-yellow-500'>About Us</h1>
            <p className='w-2/3 text-justify text-white pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda facilis nostrum! Iste optio culpa assumenda, illo id deleniti, esse officia facere tempora ipsa nihil molestiae labore corporis soluta? Ducimus libero molestiae minima. A iste dolor nisi ad praesentium. Voluptatum id rerum sunt excepturi quos officia cumque atque qui, culpa, perspiciatis odit non dicta quod facere odio mollitia ut autem omnis aliquam porro corporis ab quae? Animi voluptatibus laboriosam et numquam. Eos nostrum earum aut. Dolores minus dolorem iste? Accusamus, modi alias beatae dolore hic, quibusdam, mollitia voluptatibus explicabo exercitationem libero velit! Odio, officiis. Explicabo deleniti et aspernatur ipsa incidunt consequuntur at, vero quia nam eos sed ut animi possimus! Quaerat harum quidem recusandae possimus labore accusantium optio incidunt, consectetur nemo aut itaque ipsa temporibus praesentium quia suscipit nam aliquid in similique reiciendis numquam laborum! Quia reiciendis aliquam facilis. Consequuntur reprehenderit delectus eos sint sed eveniet consequatur soluta reiciendis obcaecati.</p>
        </div>
        {/* faculty coordinator */}
        <div className='flex justify-between px-32 pt-10 pb-10'>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-3 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>DR.NIRMAL K. ROUT</h1>
                    <h2 className='text-white text-sm'>Senior Faculty Advisor</h2>
                </div>
            </div>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-3 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>DR.NIRMAL K. ROUT</h1>
                    <h2 className='text-white text-sm'>Senior Faculty Advisor</h2>
                </div>
            </div>
            <div className='w-72 h-96 relative rounded-xl border-yellow-500 overflow-hidden border-4'>
                <img className='z-0 h-full w-full' src={PP} alt="" />
                <div className='absolute bottom-0 py-3 px-5 bg-black bg-opacity-70 w-full z-10'>
                    <h1 className='text-yellow-500 font-semibold'>DR.NIRMAL K. ROUT</h1>
                    <h2 className='text-white text-sm'>Senior Faculty Advisor</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout