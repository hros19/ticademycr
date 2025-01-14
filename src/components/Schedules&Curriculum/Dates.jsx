import { BiCalendar } from "react-icons/bi";
import UNA from '../../assets/ticademy/Logo-UNA-Rojo_FondoTransparente.png';
import TEC from '../../assets/ticademy/Logo-TEC-Color.png';
import UCR from '../../assets/ticademy/UCR-232x300.png';

function Dates() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[75vw] h-[80vh] mt-10 flex flex-col justify-between rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row h-full">
          {/* Cuadrado responsive con altura ajustada */}
          <div
            className="flex flex-col items-center justify-center w-1/2 h-full bg-customMaroon rounded-2xl hover: bg-hoverMaroon">
            <BiCalendar size={300} color="white" />
            <h1 className="text-white mt-10 text-3xl sm:text-4xl md:text-5xl font-bold">Fechas importantes</h1>
          </div>
          {/* Cuadrado 2*/}

          {/*Calendarios pequeños*/}
          <div className="flex flex-col p-4 gap-5 ml-28 w-1/2 justify-center">
            <div className="flex flex-row gap-3">      
              <div className="flex flex-row bg-customMaroon p-4 rounded-3xl w-[10%] sm:w-[13%] md:w-[12%] justify-center">
                <BiCalendar size={50} className="text-orange-700" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-black text-2xl font-bold">Inicio de clases</h1>
                <h1 className="text-gray-500 text-xl">31 enero, 2025</h1>
              </div>
            </div>
            <div className="flex flex-row gap-3">      
              <div className="flex flex-row bg-customMaroon p-4 rounded-3xl w-[10%] sm:w-[13%] md:w-[12%] justify-center">
                <BiCalendar size={50} className="text-orange-700" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-black text-2xl font-bold">Finalización del curso</h1>
                <h1 className="text-gray-500 text-xl">Primera semana de 2025</h1>
              </div>
            </div>

            {/*texto de examenes*/}
            <h1 className="text-black text-2xl font-bold">Exámenes de universidades</h1>

            {/*Logos universidades*/}
            <div className="flex flex-row items-center gap-4">
              <img src={UNA} alt="Logo 1" className="w-28 h-28 object-contain" />
              <h1 className="text-gray-500 text-xl">No definido/publicado este año</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img src={TEC} alt="Logo 1" className="w-28 h-28 object-contain" />
              <h1 className="text-gray-500 text-xl">No definido/publicado este año</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img src={UCR} alt="Logo 1" className="w-28 h-28 object-contain" />
              <h1 className="text-gray-500 text-xl">No definido/publicado este año</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dates;
