import React from 'react';
import HeroSection from '../Schedules&Curriculum/HeroSection';
import Dates from '../Schedules&Curriculum/Dates';
import Groups from '../Schedules&Curriculum/Groups'
import CourseStructure from '../Schedules&Curriculum/CourseStructure'
import FrequentQuestions from '../Schedules&Curriculum/FrequentQuestions'
import SignupSection from '../Schedules&Curriculum/SingUpSection'
import imageUrl from "../../assets/ticademy/pexels-fauxels-3184405.jpg";
import { FileText, BrainCircuit, ClipboardCheck, FunctionSquare } from 'lucide-react';

const weeks = [
  {
    title: "1ra Semana del curso",
    subtitle: "Razonamiento matemático",
    contents: ["Álgebra y funciones", "Geometría y trigonometría", "Analisis de datos y estadísticas", "Resolucion de problemas aplicados"],
    icon: FunctionSquare,
  },
  {
    title: "2da Semana del curso",
    subtitle: "Razonamiento lógico-deductivo",
    contents: ["Patrones y secuencias", "Lógica proposicional", "Análisis deductivo", "Resolucion de acertijos"],
    icon: BrainCircuit,
  },
  {
    title: "3ra Semana del curso",
    subtitle: "Comprension lectora, análisis textual-verbal",
    contents: ["Analisis de texto", "Interpretación de gráficos", "Sintesis de información", "Vocabulario contextual"],
    icon: FileText,
  },
  {
    title: "4ra Semana del curso",
    subtitle: "Repaso general, ejercicios prácticos",
    contents: ["Simulación de examen", "Resolución de casos", "Ejercicios cronometrados", "Retroalimentación personalizada"],
    icon: ClipboardCheck,
  },
];
const questions = [
  {
    question: "¿Qué sucede si no puedo asistir a una clase?",
    answer: "Las clases quedan grabadas y disponibles para que puedas ponerte al día. Además, puedes coordinar una sesión de dudas breve con tu profesor.",
  },
  {
    question: "¿Puedo cambiar de grupo durante el curso?",
    answer: "Los cambios de grupo están sujetos a disponibilidad y deben solicitarse con al menos una semana de anticipación.",
  },
  {
    question: "¿Qué necesito para las clases virtuales?",
    answer: "Necesitarás una computadora o tablet con conexión estable a internet y micrófono. Recomendamos usar auriculares para mejor experiencia.",
  },
  {
    question: "¿Se proporciona material de estudio?",
    answer: "Sí, proporcionamos material digital completo, incluyendo guías de estudio, ejercicios prácticos y exámenes de práctica.",
  },
];


const SchedulesAndCurriculum = () => {
    return (
      <div className="w-full overflow-x-hidden space-y-16"> {/* Cambiado w-screen por w-full */}
        <HeroSection
          imageUrl={imageUrl}
          heading="Prepárate para tu Futuro"
          paragraph="Programa especializado de preparación para exámenes de admisión universitaria"
          buttonText="¡Inscríbase Ahora!"
        />
        <Dates/>
        <Groups/>
        <CourseStructure Weeks={weeks}/>
        <FrequentQuestions Questions={questions}/>
        <SignupSection/>
      </div>
    );
};

export default SchedulesAndCurriculum;