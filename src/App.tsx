import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechnicalSkills from './components/TechSkills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactModel from './components/ContactModel'

import { useAppContext } from './context/useAppContext'
import clsx from 'clsx'
import { useState } from 'react'
import Experience from './components/experience'
function App() {
  const {theme} = useAppContext()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className={
      clsx(
        "p-0  m-0",
        theme === "dark" ? "bg-[#161513]" : "bg-white"
      )
    }>
      <Navbar />
      <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Footer />
      <ContactModel isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

export default App
