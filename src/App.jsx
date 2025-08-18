import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Products from './sections/Products'
import ProjectList from './sections/ProjectList'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto max-w-7xl px-8 mb-12'>
        <Routes className='container mx-auto max-w-7xl px-8 mb-12'>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectsList" element={<ProjectList />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App