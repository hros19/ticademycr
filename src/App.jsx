import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SchedulesAndCurriculum from './components/Schedules&Curriculum/Schedules&Curriculum'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Probando Tailwind CSS
          </h1>
          <p className="text-gray-600">
            Este es un ejemplo para verificar que Tailwind funciona correctamente
          </p>
        </div>

        {/* Card con contador */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-center">
            <span className="text-3xl font-bold text-blue-600">{count}</span>
            <div className="mt-4">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Incrementar contador
              </button>
            </div>
          </div>
        </div>

        {/* Elementos de prueba */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="font-bold text-green-800">Elemento 1</h2>
            <p className="text-green-600">Probando diferentes colores</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="font-bold text-purple-800">Elemento 2</h2>
            <p className="text-purple-600">Probando diferentes colores</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <h2 className="font-bold text-orange-800">Elemento 3</h2>
            <p className="text-orange-600">Probando diferentes colores</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente About
function About() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
        <p className="text-gray-600">Esta es la página About</p>
      </div>
    </div>
  )
}

// Componente principal App
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Schedules-Curriculum" element={<SchedulesAndCurriculum />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
