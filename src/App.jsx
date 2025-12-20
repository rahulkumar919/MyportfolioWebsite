import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Skills from './Component/Skills.jsx'
import AboutMe from './Component/AboutMe.jsx'



function App() {


  return (
   
 <div >
  <Navbar/>
   <About/>
   <Skills/>
   <AboutMe/>
 
 </div>


  )
}

export default App
