import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import HomeAbout from '../components/home/HomeAbout'
import HomeMain from '../components/home/HomeMain'
import FeaturedMain from '../components/featured/FeaturedMain'
import EventMain from '../components/events/EventMain'
import Testimonials from '../components/testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeMain />
        <HomeAbout />
        <FeaturedMain />
        <EventMain />
        <Testimonials />
        <Footer />
        
    </div>
  )
}

export default Home