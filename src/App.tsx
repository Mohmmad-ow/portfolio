import ProfileCard from './components/ProfileCard'
import ThemedCard from './components/ThemedCard'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechnicalSkills from './components/TechSkills'
import Projects from './components/Projects'
import Experience from './components/experience'
import Testimonials from './components/Testimonials'
function App() {

  return (
    <div className='p-0 m-0'>
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Testimonials />
      <ProfileCard />
      <ThemedCard />
    </div>
  )
}

export default App
