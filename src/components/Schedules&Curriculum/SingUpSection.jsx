import React from 'react';

const SignupSection = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen gap-6 sm:gap-8 md:gap-10 justify-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-customMaroon w-full sm:w-2/3 md:w-1/2 text-center mx-auto">
        ¿Listo para comenzar?
      </h2>

      <p className="text-black text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Asegura tu lugar en el grupo que mejor se adapte a tu horario
      </p>
      
      <button className="w-full sm:w-2/3 md:w-1/3 h-[12%] sm:h-[15%] md:h-[10%] bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg sm:text-xl md:text-2xl lg:text-4xl">
        Reserva tu espacio
      </button>
      
      <button className="w-full sm:w-2/3 md:w-1/3 xl:h-[12%] sm:h-[15%] md:h-[15%] lg:h-[25%] text-orange-500 hover:text-orange-600 border-2 border-orange-500 hover:border-orange-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg sm:text-xl md:text-2xl lg:text-4xl">
        Ver precios y planes de inscripción
      </button>
    </div>
  );
};

export default SignupSection;
