import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/sections/Hero'
import TechStack from './components/layout/sections/TechStack'
import About from './components/layout/sections/About'
import Projects from './components/layout/sections/Projects'
import Experience from './components/layout/sections/Experience'
import Certificates from './components/layout/sections/Certificates'
import Footer from './components/layout/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Respect users who prefer reduced motion.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) lenis.destroy()

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative m-0 p-0">
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Footer />
      </div>
    </div>
  )
}

export default App
