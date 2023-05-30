
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 head='PROJECTS.' text=' My Masterpiece Collections' />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project