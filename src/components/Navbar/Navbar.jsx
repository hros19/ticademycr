import React, { useState } from 'react';
import { CircleUserRound, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#3B1D1D] px-4 py-3 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="text-white text-3xl lg:text-4xl font-bold">ticademy</button>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-white hover:text-gray-300 transition-colors"> {isOpen ? <X size={32} /> : <Menu size={32} />} </button>
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10 text-xl">
          <button onClick={() => navigate('/inicio')} className="text-white hover:text-gray-300 transition-colors">Inicio</button>
          <button onClick={() => navigate('/planes')} className="text-white hover:text-gray-300 transition-colors">Planes</button>
          <button onClick={() => navigate('/horarios')} className="text-white hover:text-gray-300 transition-colors">Horarios</button>
          <button onClick={() => navigate('/contacto')} className="text-white hover:text-gray-300 transition-colors">Contacto</button>
          <button onClick={() => navigate('/inscripcion')} className="text-white hover:text-gray-300 transition-colors">Inscripción</button>
        </div>
        {/* Desktop Right side buttons */}
        <div className="hidden lg:flex items-center space-x-10">
          <button onClick={() => navigate('/simulador')} className="bg-white text-[#3B1D1D] px-4 py-2 rounded-2xl font-bold hover:bg-gray-100 transition-colors">Simulador</button>
          <button onClick={() => navigate('/perfil')} className="text-white hover:text-gray-300 transition-colors"> 
            <CircleUserRound size={45} />
          </button>
        </div>
      </div>
      {/* Mobile/Tablet Menu */}
      <div className={`${isOpen ? 'flex' : 'hidden'} lg:hidden absolute top-full left-0 right-0 bg-[#3B1D1D] flex-col items-center py-4 space-y-4 shadow-lg z-50`}>
        <button onClick={() => {navigate('/inicio');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors text-lg">Inicio</button>
        <button onClick={() => {navigate('/planes');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors text-lg">Planes</button>
        <button onClick={() => {navigate('/horarios');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors text-lg">Horarios</button>
        <button onClick={() => {navigate('/contacto');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors text-lg">Contacto</button>
        <button onClick={() => {navigate('/inscripcion');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors text-lg">Inscripción</button>
        <button onClick={() => {navigate('/simulador');setIsOpen(false);}} className="bg-white text-[#3B1D1D] px-4 py-2 rounded-2xl font-bold hover:bg-gray-100 transition-colors">Simulador</button>
        <button onClick={() => {navigate('/perfil');setIsOpen(false);}} className="text-white hover:text-gray-300 transition-colors">
          <CircleUserRound size={40} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;