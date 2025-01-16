import { useState } from 'react'
import HeroSection from './components/HeroSection.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Navbar, pendiente de agregar el otro */}
      <HeroSection></HeroSection>
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Ticademy
            </Link>
            <Link
              to="/admin"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App