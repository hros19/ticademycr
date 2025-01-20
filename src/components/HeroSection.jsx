
import { useNavigate } from 'react-router-dom';
import graduacionImg from '../assets/ticademy/hero-banner-gausscuro.png';

function HeroSection() {
  const nav = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${graduacionImg})` }}
      className="select-none bg-center bg-cover h-screen w-screen content-center px-10 sm:px-20 md:px-40 relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:bg-opacity-0"></div>
      <div className="relative z-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold font-Poppins">
          Abre las puertas de tu <br /> futuro universitario
        </h1>
        <h2 className="pt-4 text-white text-2xl sm:text-3xl md:text-4xl font-Poppins">
          Preparación personalizada en <br /> grupos reducidos para garantizar <br />
          <span className="font-extrabold">tu ingreso</span>
        </h2>
        <button
          onClick={() => nav("/planes")}
          className="rounded-full mt-5 p-3 sm:p-4 md:p-5 bg-[#2A0800] text-lg sm:text-xl md:text-2xl font-semibold font-Poppins text-[#FFC6B2] hover:bg-red-500 hover:text-white hover:shadow-xl hover:scale-110 transform transition-all duration-500"
        >
          Explore nuestra ofertas
        </button>
      </div>
    </div>
  );
}

export default HeroSection;