import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  
  return (
    
    <div>
      <Navbar/>
      <HeroImg2 heading='CONTACT.' text='lets have a chat'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact