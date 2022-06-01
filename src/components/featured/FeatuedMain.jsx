import React from 'react'
import PP from "../../public/pp.jpeg"

const featuredData = [
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  },
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  },
  {
    heading: "PRADARSHAANA 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP
  }  
];

function FeaturedMain() {
  return (
    <div className='bg-black'>
      <div className=''>
        <h1 className='text-center text-6xl font-bold pt-6 px-10 text-yellow-500'>Featured Works</h1>
        <div className='w-full py-10 grid grid-cols-1 '>
          {featuredData.map((data,index) => {
            return(
              <div className='flex even:flex-row-reverse bg-[#111111] mx-10 my-5 px-8 py-8 even:justify-self-end w-4/6 rounded-2xl border-2 border-yellow-500'>
                <div className=''>
                  <img className='w-[500px] rounded-2xl' src={data.img} alt="" />
                </div>
                <div className='text-white mx-5 text-justify'>
                  <h1 className='text-yellow-500 font-bold text-xl'>{data.heading}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default FeaturedMain