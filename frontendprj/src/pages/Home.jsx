import React from 'react'
import Hero from '../components/Hero'
import LatestItem from '../components/LatestItem'
import OurPolicy from '../components/OurPolicy'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/> 
        <LatestItem/>
        <OurPolicy/>
        <Footer/>
    </div>
  )
}

export default Home