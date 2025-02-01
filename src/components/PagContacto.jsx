import estFoto from "../assets/ticademy/estudiante_conectada_a_una_clase_virtual_desde_una_computadora_50.jpg";

function PagContacto() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="select-none text-4xl md:text-5xl font-bold text-[#5e2137]">
              Contáctenos
            </h1>
            <p className="select-none text-lg md:text-xl text-gray-600">
              ¿Listo para tu examen de admisión?
              <br />
              Estamos aquí para ayudarte a prepararte
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-gray-800 text-white rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#7289da] rounded-full flex-shrink-0" />
                <div>
                  <div className="select-none font-semibold text-lg">Discord</div>
                  <div className="text-base text-gray-300">discord#1111</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 text-white rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#25d366] rounded-full flex-shrink-0" />
                <div>
                  <div className="select-none font-semibold text-lg">WhatsApp</div>
                  <div className="text-base text-gray-300">8888 8888</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 text-white rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#f44336] rounded-full flex-shrink-0" />
                <div>
                  <div className="select-none font-semibold text-lg">Correo electrónico</div>
                  <div className="text-base text-gray-300">rosthran@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="select-none w-full lg:w-1/2">
          <img
            src={estFoto}
            alt="Estudiante conectada a una clase virtual"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PagContacto;