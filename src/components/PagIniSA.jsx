import logoUNA from "../assets/ticademy/image (7).png"
import logoTEC from "../assets/ticademy/image (3).png"
import logoUCR from "../assets/ticademy/image (6).png"

import compu from "../assets/ticademy/pexels-julia-m-cameron-4144927.jpg"
import materiales from "../assets/ticademy/pexels-cottonbro-4778611.jpg"
import senior from "../assets/ticademy/pexels-vanessa-garcia-6325968.jpg"

function PagIniSA() {
  return (
    <div className="select-none w-full">
      <div className="w-full bg-[#2A0800] flex flex-col items-center py-16">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-Poppins text-center">
          Preparación integral para exámenes de
        </h1>
        <h1 className="pt-6 text-white text-3xl sm:text-4xl md:text-5xl font-bold font-Poppins text-center">
          admisión universitaria
        </h1>
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8">
          <img className="h-80 object-contain" src={logoTEC} alt="Logo del Tecnologico de Costa Rica" />
          <img className="h-52 object-contain" src={logoUNA} alt="Logo de la Universidad Nacional" />
          <img className="h-80 object-contain" src={logoUCR} alt="Logo de la Universidad de Costa Rica" />
        </div>
      </div>

      <div className="bg-white w-full py-16 flex flex-col items-center">
        <h1 className="text-[#2A0800] text-3xl sm:text-4xl md:text-5xl font-bold font-Poppins text-center mb-16">
          ¿Por qué elegir nuestra academia?
        </h1>
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative h-96 w-full">
            <div
              style={{ backgroundImage: `url(${compu})` }}
              className="absolute inset-0 bg-center bg-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4 font-bold rounded-b-lg">
              Clases virtuales en vivo
            </div>
          </div>

          <div className="relative h-96 w-full">
            <div
              style={{ backgroundImage: `url(${materiales})` }}
              className="absolute inset-0 bg-center bg-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4 font-bold rounded-b-lg">
              Material práctico y didáctico
            </div>
          </div>

          <div className="relative h-96 w-full">
            <div
              style={{ backgroundImage: `url(${senior})` }}
              className="absolute inset-0 bg-center bg-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4 font-bold rounded-b-lg">
              Tutorías privadas y seguimiento
            </div>
          </div>

          <div className="h-96 w-full bg-[#2A0800] rounded-lg p-6 flex flex-col">
            <h2 className="text-[#FFC6B2] text-2xl font-bold mb-6">
              Únete a nuestra comunidad
            </h2>
            <div className="space-y-4">
              <p className="text-white">
                Aprende desde cualquier lugar con nuestras sesiones interactivas
              </p>
              <p className="text-white">
                Aprendizaje activo y participativo para mejor retención
              </p>
              <p className="text-white">
                Colabora con otros estudiantes para un aprendizaje enriquecido
              </p>
              <p className="text-white">
                Acceso a herramientas en línea para complementar las clases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagIniSA