import CursorGlow from './components/CursorGlow'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/sections/Hero'
import TechStack from './components/layout/sections/TechStack'
import About from './components/layout/sections/About'
import Projects from './components/layout/sections/Projects'
import Experience from './components/layout/sections/Experience'
import Footer from './components/layout/Footer'

function App() {
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
        <Footer />
      </div>
    </div>
  )
}

export default App
