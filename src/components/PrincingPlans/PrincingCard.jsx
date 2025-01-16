import React from 'react';

const PricingCard = ({ title, price, subtext, features, isGroup = false }) => {
  return (
    <div className={`p-6 flex flex-col md:flex-row gap-6 rounded-lg shadow ${isGroup ? 'bg-[#4A192C] text-white' : 'bg-white'}`}>
      {/* Title and Price Section */}
      <div className="flex flex-col w-full md:w-1/3">
        <h3 className="font-bold text-2xl text-center">{title}</h3>
        <div className="flex flex-col items-center gap-2">
          <span className={`text-4xl font-bold text-center ${isGroup ? 'text-yellow-300' : 'text-black'}`}>{price}</span>
          <span className="text-2xl opacity-75 text-center">{subtext}</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col w-full md:w-1/3 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-xl">
            <span className="text-green-500">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex flex-col justify-center items-center relative w-full md:w-1/3 mt-6">
        <button className="bg-[#E04807] hover:bg-orange-600 text-yellow-300 px-6 py-3 rounded-2xl font-poppins text-4xl w-[80%] md:w-[50%] h-[85%]">
          Reservar ahora
        </button>
        <div className="absolute bottom-[-15px] text-white text-center w-[80%] md:w-[45%] bg-[#03005F] rounded-2xl py-1">
          cupos limitados
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
