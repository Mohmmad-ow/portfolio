import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechnicalSkills from './components/TechSkills'
import Projects from './components/Projects'
import Experience from './components/experience'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import { useAppContext } from './context/useAppContext'
import clsx from 'clsx'
function App() {
  const {theme} = useAppContext()
  return (
    <div className={
      clsx(
        "p-0  m-0",
        theme === "dark" ? "bg-[#161513]" : "bg-white"
      )
    }>
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <Projects />
      {/* <Experience />
      <Testimonials /> */}
      <Footer />
    </div>
  )
}

export default App
