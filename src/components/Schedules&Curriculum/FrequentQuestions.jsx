import React from 'react';

const FrequentQuestions = ({ Questions }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-20">
      <h1 className="text-customMaroon mt-10  mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center">Preguntas frecuentes</h1>
      {/* Renderizar cada pregunta */}
      {Questions.map((question, index) => (
        <div
          key={index}
          className="flex flex-col w-full sm:w-[80%] lg:w-[70%] border border-gray-300 rounded-2xl mt-8">
          {/* Parte marrón (Pregunta) */}
          <div className="p-6 sm:p-8 bg-customMaroon rounded-t-2xl text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            {question.question}
          </div>
          {/* Parte gris (Respuesta) */}
          <div className="p-6 sm:p-8 bg-gray-100 rounded-b-2xl text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
            {question.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrequentQuestions;
