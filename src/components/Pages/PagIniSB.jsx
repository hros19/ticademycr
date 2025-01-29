import demoFoto from "../../assets/ticademy/demo examen demo.png"


function PagIniSB() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center bg-white">
      <h1 className="text-[#2A0800] text-xl sm:text-3xl md:text-5xl font-bold font-Poppins text-center">
        Domina el examen de admisión
      </h1>
      <h2 className="pt-10 text-black text-xl sm:text-2xl md:text-3xl font-regular font-Poppins text-center">
        La mejor plataforma para prepararte. Practica con exámenes reales, recibe
      </h2 >
      <h2 className="pt-2 text-black text-xl sm:text-2xl md:text-3xl font-regular font-Poppins text-center">
        retroalimentación instantánea y mejora tu rendimiento
      </h2>
      <div className="pt-7 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10">
        <button className="font-Poppins font-semibold px-6 py-3 text-xl bg-[#2A0800] text-white rounded-xl hover:bg-white hover:border hover:border-[#2A0800] hover:text-[#2A0800] transition duration-300">
          Comenzar ahora
        </button>
        <button className="font-Poppins font-semibold px-6 py-3 text-xl bg-white text-[#2A0800] border border-[#2A0800] rounded-xl hover:bg-[#2A0800] hover:text-white transition duration-300">
          Ver demostración
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${demoFoto})` }}
        className="hidden lg:block rounded-xl m-10 w-[80vw] h-[80vh] select-none bg-center bg-cover content-center px-10 sm:px-20 md:px-40">
      </div>
    </div>
  )
}

export default PagIniSB