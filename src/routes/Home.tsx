import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/work'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home