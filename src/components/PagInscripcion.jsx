import { useState } from "react";
import { User, Phone, Mail, AlertCircle, Building2, Calendar, IdCard } from "lucide-react";

function PagInscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    cedula: "",
    contacto: "",
    correo: "",
    colegio: "",
    horario: "",
    terminos: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const horarioOptions = ["Mañana", "Tarde", "Noche"];
  const colegioOptions = ["Colegio A", "Colegio B", "Colegio C"];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
      case 'primerApellido':
      case 'segundoApellido':
        return !value.trim() ? 'Este campo es requerido' : '';
      case "cedula":
        if (!value) return "Este campo es requerido";
        if (!/^\d+$/.test(value)) return "Solo se permiten números";
        if (value.length != 9) return "La cédula debe tener 9 dígitos";
        return "";
      case "contacto":
        if (!value) return "Este campo es requerido";
        if (!/^\d+$/.test(value)) return "Solo se permiten números";
        if (value.length != 8) return "El número de contacto debe tener 8 dígitos";
        return "";
      case 'correo':
        if (!value) return 'Este campo es requerido';
        if (!validateEmail(value)) return 'Correo electrónico inválido';
        return '';
      case 'colegio':
      case 'horario':
        return !value ? 'Este campo es requerido' : '';
      case 'terminos':
        return !value ? 'Debe aceptar los términos y condiciones' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario válido:", formData);
      alert("Formulario enviado correctamente");
    } else {
      console.log("Formulario con errores:", newErrors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-normal font-Poppins select-none text-center mb-8 text-gray-700">
          Inscripción de estudiantes
        </h1>
        <div className="w-full md:w-[70vw] max-w-4xl bg-[#4A192C] rounded-lg p-4 md:p-6 mb-6">
          <label className="block text-white select-none text-sm font-Poppins mb-2">Horario curso</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none text-gray-400 font-poppins ${errors.horario && touched.horario ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}>
              <option value="">Seleccione un horario</option>
              {horarioOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {errors.horario && touched.horario && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                <span>{errors.horario}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="w-full md:w-[70vw] max-w-4xl bg-[#EBE4E4] rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-Poppins select-none font-medium mb-4 text-gray-700">Datos personales</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre del estudiante"
                  value={formData.nombre || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.nombre && touched.nombre ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.nombre && touched.nombre && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.nombre}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="primerApellido"
                  placeholder="Primer apellido"
                  value={formData.primerApellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.primerApellido && touched.primerApellido ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.primerApellido && touched.primerApellido && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.primerApellido}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="segundoApellido"
                  placeholder="Segundo apellido"
                  value={formData.segundoApellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.segundoApellido && touched.segundoApellido ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.segundoApellido && touched.segundoApellido && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.segundoApellido}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <IdCard className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="cedula"
                  placeholder="Cédula"
                  value={formData.cedula}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.cedula && touched.cedula ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.cedula && touched.cedula && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.cedula}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="contacto"
                  placeholder="Número de contacto"
                  value={formData.contacto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.contacto && touched.contacto ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.contacto && touched.contacto && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.contacto}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo electrónico del estudiante"
                  value={formData.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none ${errors.correo && touched.correo ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`} />
                {errors.correo && touched.correo && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.correo}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <select
                    name="colegio"
                    value={formData.colegio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none text-gray-400 font-poppins ${errors.colegio && touched.colegio ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}>
                    <option value="">Seleccionar colegio de procedencia</option>
                    {colegioOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.colegio && touched.colegio && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span>{errors.colegio}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    name="terminos"
                    checked={formData.terminos}
                    onChange={handleChange}
                    className="form-checkbox text-gray-700" />
                  <span className="ml-2 text-sm text-gray-700">
                    Acepto los términos y condiciones
                  </span>
                </label>
                {errors.terminos && touched.terminos && (
                  <div className="text-red-500 text-sm mt-1">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.terminos}
                  </div>
                )}
              </div>
              <button type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#D95030] text-white font-medium hover:bg-[#ee431b]">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagInscripcion;