import React from 'react';
import { CalendarClock, Pencil, BookText, MessageSquare } from 'lucide-react';

function FeaturesList() {
  return (
    <div className="bg-gray-200 rounded-lg p-6 w-full">
      <h2 className="font-bold mb-6 text-2xl text-center sm:text-left">Incluye</h2>
      <div className="space-y-6 ml-4 sm:ml-20">
        
        {/* Feature 1 */}
        <div className="flex gap-4 flex-wrap">
          <div className="text-red-500">
            <CalendarClock className="inline-block w-10 h-10 text-orange-700" />
          </div>
          <div className="text-sm text-gray-600 w-full sm:w-auto">  
            <div className="font-medium text-base text-gray-800 mb-1">
              Una clase por semana durante todo el mes
            </div>
            Cada clase tiene una duración de 3 horas <br />
            Cada semana se abarca un tema central que son abarcados en los exámenes <br />
            Al final de cada mes, se hace un simulacro de examen
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4 flex-wrap">
          <div className="text-red-500">
            <Pencil className="inline-block w-10 h-10 text-orange-700" />
          </div>
          <div className="text-sm text-gray-600 w-full sm:w-auto">  
            <div className="font-medium text-base text-gray-800 mb-1">
              Acceso completo al simulador de exámenes en línea
            </div>
            Esta herramienta en línea estará disponible 24/7<br />
            Permite hacer ejercicios en línea para practicar en cualquier momento
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-4 flex-wrap">
          <div className="text-red-500">
            <BookText className="inline-block w-10 h-10 text-orange-700" />
          </div>
          <div className="text-sm text-gray-600 w-full sm:w-auto">  
            <div className="font-medium text-base text-gray-800 mb-1">
              Material didáctico
            </div>
            Acceso grabaciones y ejercicios <br />
            Métodos de comunicación para consultas
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-4 flex-wrap">
          <div className="text-red-500">
            <MessageSquare className="inline-block w-10 h-10 text-orange-700" />
          </div>
          <div className="text-sm text-gray-600 w-full sm:w-auto">  
            <div className="font-medium text-base text-gray-800 mb-1">
              Acceso completo al simulador de exámenes en línea
            </div>
            Explicaciones detalladas de ejercicios en vivo <br />
            Espacios didácticos para la realización de ejercicios y material de práctica
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FeaturesList;
