import users from '../assets/ticademy/users.svg';
import calendario from '../assets/ticademy/calendar-clock.svg';

function PagIniSC() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2A0800] w-full min-h-screen">
      <div className=" mb-8">
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold font-Poppins text-center">
          Prepárate con nosotros
        </h1>
      </div>

      <div className="w-full max-w-[80vw] bg-white rounded-3xl p-6 mb-6">
        <div className=" flex items-center">
          <img src={calendario} alt="Calendar icon" className="w-16 h-16 mb-4" />
          <h2 className="mx-5 text-black text-lg sm:text-xl md:text-2xl font-semibold font-Poppins mb-2">
            Horarios flexibles
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-Poppins mb-4">
          Tres grupos disponibles: viernes, sábados y domingos
        </p>
        <button className="font-semibold text-[#E04807] font-Poppins text-base hover:underline">
          Ver todos los horarios y el plan de estudio →
        </button>
      </div>

      <div className="w-full max-w-[80vw] bg-white rounded-3xl p-6 mb-6">
        <div className=" flex items-center">
          <img src={users} alt="Users icon" className="w-16 h-16 mb-4" />
          <h2 className="mx-5 text-black text-lg sm:text-xl md:text-2xl font-semibold font-Poppins mb-2">
            Planes accesibles
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-Poppins mb-4">
          Opciones individuales y grupales adaptadas a tu presupuesto
        </p>
        <button className="font-semibold text-[#E04807] font-Poppins text-base hover:underline">
          Ver precios y planes de inscripción →
        </button>
      </div>

      <div className="w-full max-w-[80vw] bg-[#E04807] rounded-3xl p-6 mb-6">
        <div className="flex flex-col">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold font-Poppins mb-2">
            ¿Listo para empezar?
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl font-Poppins mb-4">
            El proceso de inscripción es rápido y sencillo. Asegura tu cupo hoy.
          </p>
          <button className="font-semibold bg-white text-[#E04807] font-Poppins text-base py-2 px-4 rounded-full self-start hover:bg-gray-100">
            Inscribirme ahora
          </button>
        </div>
      </div>
    </div>
  )
}

export default PagIniSC