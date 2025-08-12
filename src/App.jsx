import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Products from './sections/Products'

const App = () => {
  return (
    <div className=''>
      <div className='container mx-auto max-w-7xl px-8'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Products />
        <Contact />
      </div>
      <Footer />

    </div>
  )
}

export default App