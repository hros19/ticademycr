import React from 'react';

const CourseStructure = ({ Weeks }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 h-screen">
      <h1 className="text-customMaroon mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Estructura del curso
      </h1>
      {/* Renderizar cada curso */}
      {Weeks.map((Week, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row overflow-hidden px-4 sm:px-6 lg:px-8 w-full sm:w-[90%] rounded-2xl shadow-2xl mt-8 p-4 sm:p-5 lg:p-6">
          {/* Título del curso */}
          <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
            <div className="flex items-center justify-center bg-customMaroon h-16 w-16 sm:h-20 sm:w-20 rounded-xl text-white">
              {/* Puedes añadir un ícono aquí si es necesario */}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-4">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{Week.title}</h1>
              <h1 className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                {Week.subtitle}
              </h1>
            </div>
            {/* Lista de contenidos */}
            <ul className="list-disc ml-6 sm:ml-10">
              {Week.contents.map((content, contentIndex) => (
                <li
                  key={contentIndex}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-normal sm:font-bold mb-1">
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseStructure;
