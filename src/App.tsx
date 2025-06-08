import ProfileCard from './components/ProfileCard'
import ThemedCard from './components/ThemedCard'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechnicalSkills from './components/TechSkills'
import Projects from './components/Projects'
function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <Projects />
      <ProfileCard />
      <ThemedCard />
    </div>
  )
}

export default App
