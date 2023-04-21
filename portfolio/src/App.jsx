import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Navbar from './components/Navbar'


function App() {
  return (

    <div className='container'>
      <Navbar className='navbar'/>
      <HomePage className='home'/>
      <AboutMe className='about'/>
      <Tech className='tech'/>
      <Projects className='projects'/>
      <Contact className='contact'/>

    
    </div>
  )
}

export default App;
