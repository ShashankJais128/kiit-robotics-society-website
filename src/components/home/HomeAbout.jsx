import React from 'react'
import PP from "../../public/pp.jpeg"
import AB1 from "../../public/ab1.jpg"
import Twitter from "../../public/twitter.png"
import Insta from "../../public/instagram.png"
import Git from "../../public/github.png"
import Linkedin from "../../public/linkedin.png"
import Fac from "../../public/facult.jpg"

function HomeAbout() {
  return (
    <div className=' bg-black bg-cover bg-top px-8 py-10'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Fac})`}}>
        <div className='w-full flex'>
            <div className='w-1/3 space-y-3 px-12 flex flex-col justify-center'>
                <h1 className='text-white text-5xl xl:text-7xl font-bold'>Meet Our</h1>
                <h1 className='text-yellow-500 text-5xl xl:text-7xl font-bold'>Faculty</h1>
                <h1 className='text-yellow-500 text-5xl xl:text-7xl font-bold'>Advisory</h1>
                <h1 className='text-yellow-500 text-5xl xl:text-7xl font-bold'>Committee</h1>
            </div>
            <div className='w-2/3 flex justify-end space-x-10 mr-10'>
                <div className='bg-[#111111] w-[350px] space-y-4  my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                    <div className=''>
                    <img className='w-40 h-40 rounded-3xl' src={PP} alt="" />
                    </div>
                    <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                    <div className='space-y-1 flex flex-col items-center'>
                        <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>N K Raut</h1>
                        <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-justify text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime?</p>
                    </div>
                    
                    <div className='flex space-x-3'>
                        <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                        
                    </div>
                    </div>
                </div>

                <div className='bg-[#111111] w-[350px] space-y-4  my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                    <div className=''>
                    <img className='w-40 h-40 rounded-3xl' src={PP} alt="" />
                    </div>
                    <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                    <div className='space-y-1 flex flex-col items-center'>
                        <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>N K Raut</h1>
                        <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-justify text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime?</p>
                    </div>
                    
                    <div className='flex space-x-3'>
                        <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                        <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end space-x-10 mx-10'>
            <div className='bg-[#111111] w-[350px] space-y-4  my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={PP} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>N K Raut</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime?</p>
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                    
                  </div>
                </div>
            </div>

            <div className='bg-[#111111] w-[350px] space-y-4  my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={PP} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>N K Raut</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime?</p>
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                    
                  </div>
                </div>
            </div>

            <div className='bg-[#111111] w-[350px] space-y-4  my-5 px-8 py-8 flex flex-col items-center rounded-2xl border-t-4 border-b-4 border-yellow-500'>
                <div className=''>
                  <img className='w-40 h-40 rounded-3xl' src={PP} alt="" />
                </div>
                <div className='flex flex-col justify-between space-y-5 h-full items-center mx-5'>
                  <div className='space-y-1 flex flex-col items-center'>
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-xl text-center'>N K Raut</h1>
                    <h2 className='text-white font-semibold text-base sm:text-lg text-center'>Coordingator</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-white text-justify text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime?</p>
                  </div>
                  
                  <div className='flex space-x-3'>
                    <a className='' href=""><img className='w-8' src={Twitter} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Insta} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Git} alt="" /></a>
                    <a className='' href=""><img className='w-8' src={Linkedin} alt="" /></a>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout