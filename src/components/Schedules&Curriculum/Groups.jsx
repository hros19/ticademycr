import React from 'react';
import { Clock } from "lucide-react";

const Groups = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden overflow-x-hidden px-4 sm:px-6 lg:px-8 h-screen">
      <h1 className="text-customMaroon mt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center">Grupos</h1>
      <div className="w-full mt-10 flex flex-col sm:flex-row gap-10 justify-center rounded-2xl h-auto sm:h-1/2">
        {/* Cuadrado 1 */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[30%] h-auto sm:h-full bg-customMaroon rounded-lg hover:bg-hoverMaroon transition-all duration-300 p-4">
          <Clock size="40%" color="white" />
          <h1 className="text-orange-700 mt-4 text-xl sm:text-3xl font-bold">Viernes</h1>
          <h1 className="text-white mt-4 text-xl sm:text-3xl font-bold">6pm - 9pm</h1>
        </div>
        {/* Cuadrado 2 */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[30%] h-auto sm:h-full bg-customMaroon rounded-lg hover:bg-hoverMaroon transition-all duration-300 p-4">
          <Clock size="40%" color="white" />
          <h1 className="text-orange-700 mt-4 text-xl sm:text-3xl font-bold">Sábados</h1>
          <h1 className="text-white mt-4 text-xl sm:text-3xl font-bold">6pm - 9pm</h1>
        </div>
        {/* Cuadrado 3 */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[30%] h-auto sm:h-full bg-customMaroon rounded-lg hover:bg-hoverMaroon transition-all duration-300 p-4">
          <Clock size="40%" color="white" />
          <h1 className="text-orange-700 mt-4 text-xl sm:text-3xl font-bold">Domingos</h1>
          <h1 className="text-white mt-4 text-xl sm:text-3xl font-bold">6pm - 9pm</h1>
        </div>
      </div>
      {/* Add a text beneath the squares with reduced margin */}
      <div className="mt-10 sm:mt-10 text-center text-lg sm:text-3xl text-gray-600">
        <p>Puede contactarnos si busca atención personalizada</p>
      </div>
    </div>
  );
}

export default Groups;
