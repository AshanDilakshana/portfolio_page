
import React from 'react'
import Navbar from './components/Navbar.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <BackgroundFX />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
       {/* <Experience /> */}
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
