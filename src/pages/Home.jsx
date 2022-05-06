import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import HomeAbout from '../components/home/HomeAbout'
import HomeAchievements from '../components/home/HomeAchievements'
import HomeCollaborations from '../components/home/HomeCollaborations'
import HomeMain from '../components/home/HomeMain'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeMain />
        <HomeAbout />
        <HomeAchievements />
        <HomeCollaborations />
        <Footer />
    </div>
  )
}

export default Home