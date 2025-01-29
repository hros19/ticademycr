import { useState } from 'react'
import HeroSection from './components/HeroSection.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import PPlans from './components/Pages/PPlans.jsx'
import SC from './components/Pages/S&C.jsx'

import HS from './components/HeroSection.jsx'
import Contact from './components/Pages/PagContacto.jsx'
import SA from './components/Pages/PagIniSA.jsx'
import SB from './components/Pages/PagIniSB.jsx'
import SCC from './components/Pages/PagIniSC.jsx'



function App() {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/pplans" element={<PPlans />} />
        <Route path="/sc" element={<SC />} />
        <Route path="/hs" element={<HS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sa" element={<SA/>} />
        <Route path="/sb" element={<SB/>} />
        <Route path="/scc" element={<SCC/>} />
      </Routes>
    </div>
  )
}

export default App