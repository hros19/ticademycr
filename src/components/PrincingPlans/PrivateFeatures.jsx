import React from 'react';
import ExamenIMG from '../../assets/ticademy/examen-admision-universidad.png';

function PrivateFeatures() {
  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full flex flex-col md:flex-row items-center">
      <img
        src={ExamenIMG}
        alt="Descripción de la imagen"
        className="w-full md:w-1/2 h-auto object-cover mb-6 md:mb-0 rounded-2xl"
      />
      <div className="text-black text-xl rounded-2xl md:ml-20">
        ¿Buscas horarios y atención personalizada? <br /> <br />
        Ofrecemos atención personalizada <br />
        Tutorías privadas (profesor-estudiante) <br />
        Horarios según conveniencia del estudiante <br />
        Acceso a herramientas y contenido de clases <br />
        Seguimiento personalizado al estudiante
      </div>
    </div>
  );
}

export default PrivateFeatures;
