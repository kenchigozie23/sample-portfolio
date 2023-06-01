
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Skills from '../components/Skills'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 head= 'ABOUT.' text='Am a full stack developer'/>
      <AboutContent/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About