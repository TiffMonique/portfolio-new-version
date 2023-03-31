import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import React from 'react'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Hero />
      <Projects />
      <About/>
      {/* <Contact /> */}
    </div>
  )
}

export default App
