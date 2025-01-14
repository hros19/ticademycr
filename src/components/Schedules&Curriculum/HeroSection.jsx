import React from 'react';

const HeroSection = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      {/* Overlay para oscurecer ligeramente la imagen */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Contenedor de texto */}
      <div className="relative z-10 w-screen h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
          <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-4 sm:mx-6 md:ml-8 lg:ml-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
              {heading.split(' ').map((word, index, array) => (
                <React.Fragment key={index}>
                  {word}
                  {index < array.length - 1 && ' '}
                  {index === 2 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-xl">
              {paragraph}
            </p>
            <button className="w-full sm:w-auto bg-customMaroon hover:bg-hoverMaroon text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg transition-colors duration-300">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;