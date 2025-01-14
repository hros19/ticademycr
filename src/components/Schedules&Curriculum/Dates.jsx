import { Calendar } from "lucide-react";
import UNA from '../../assets/ticademy/Logo-UNA-Rojo_FondoTransparente.png';
import TEC from '../../assets/ticademy/Logo-TEC-Color.png';
import UCR from '../../assets/ticademy/UCR-232x300.png';

function Dates() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[95vw] lg:max-w-[75vw] h-auto mt-10 flex flex-col justify-between rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Cuadrado responsive con altura ajustada */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-[30vh] lg:h-auto bg-customMaroon rounded-t-2xl lg:rounded-2xl hover:bg-hoverMaroon">
            <Calendar size={150} lg:size={300} color="white" />
            <h1 className="text-white mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Fechas importantes
            </h1>
          </div>
          
          {/* Calendarios pequeños */}
          <div className="flex flex-col p-4 gap-5 lg:ml-10 w-full lg:w-1/2 justify-center">
            <div className="flex flex-row gap-3">
              <div className="flex flex-row bg-customMaroon p-4 rounded-3xl w-[15%] sm:w-[13%] md:w-[12%] justify-center">
                <Calendar size={40} sm:size={50} className="text-orange-700" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold">
                  Inicio de clases
                </h1>
                <h1 className="text-gray-500 text-sm sm:text-lg md:text-xl">
                  31 enero, 2025
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-row bg-customMaroon p-4 rounded-3xl w-[15%] sm:w-[13%] md:w-[12%] justify-center">
                <Calendar size={40} sm:size={50} className="text-orange-700" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold">
                  Finalización del curso
                </h1>
                <h1 className="text-gray-500 text-sm sm:text-lg md:text-xl">
                  Primera semana de 2025
                </h1>
              </div>
            </div>

            {/* Texto de exámenes */}
            <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold">
              Exámenes de universidades
            </h1>

            {/* Logos universidades */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4">
                <img src={UNA} alt="Logo 1" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain" />
                <h1 className="text-gray-500 text-sm sm:text-base md:text-xl">
                  No definido/publicado este año
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <img src={TEC} alt="Logo 2" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain" />
                <h1 className="text-gray-500 text-sm sm:text-base md:text-xl">
                  No definido/publicado este año
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <img src={UCR} alt="Logo 3" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain" />
                <h1 className="text-gray-500 text-sm sm:text-base md:text-xl">
                  No definido/publicado este año
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dates;
