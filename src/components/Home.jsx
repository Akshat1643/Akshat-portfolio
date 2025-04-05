import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
   <>
    <section className='container'>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        
    </section>
    <Contact/>
   </>
  )
}

export default Home
