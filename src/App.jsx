import { Routes, Route, Link } from 'react-router-dom'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Navbar, pendiente de agregar el otro */}
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

      <Routes>
        <Route path="/" element={
          <div className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 py-20">
                  Bienvenido a Ticademy
                </h1>
                <p className="text-lg text-gray-600 py-20">
                  Ticademy es una plataforma de cursos en línea que te permite aprender a tu propio ritmo.
                </p>
              </div>
            </div>
          </div>
        } />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App