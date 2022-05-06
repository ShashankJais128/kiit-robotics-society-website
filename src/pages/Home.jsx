import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import HomeAbout from '../components/home/HomeAbout'
import HomeMain from '../components/home/HomeMain'
import FeaturedMain from '../components/featured/FeaturedMain'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeMain />
        <HomeAbout />
        <FeaturedMain />
        <Footer />
        
    </div>
  )
}

export default Home