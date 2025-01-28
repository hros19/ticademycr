import { useState } from 'react'
import HeroSection from './components/HeroSection.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import PPlans from './components/Pages/PPlans.jsx'
import SC from './components/Pages/S&C.jsx'

import HS from './components/HeroSection.jsx'


function App() {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/pplans" element={<PPlans />} />
        <Route path="/sc" element={<SC />} />
        <Route path="/hs" element={<HS />} />
      </Routes>
    </div>
  )
}

export default App