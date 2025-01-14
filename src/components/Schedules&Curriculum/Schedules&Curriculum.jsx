import React from 'react';
import HeroSection from './HeroSection';
import Dates from './Dates';
import Groups from './Groups'
import CourseStructure from './CourseStructure'
import imageUrl from "../../assets/ticademy/pexels-fauxels-3184405.jpg";


const weeks = [
  {
    title: "Semana 1",
    subtitle: "Introducción al desarrollo web",
    contents: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Semana 2",
    subtitle: "Programación en Python",
    contents: ["Variables", "Funciones", "Clases"],
  },
  {
    title: "Semana 3",
    subtitle: "Bases de datos",
    contents: ["SQL", "Diseño de esquemas", "Consultas avanzadas"],
  },
];


const SchedulesAndCurriculum = () => {
  return (
    <div className="w-screen">
      <HeroSection
        imageUrl={imageUrl}
        heading="Prepárate para tu Futuro"
        paragraph="Programa especializado de preparación para exámenes de admisión universitaria"
        buttonText="¡Inscríbase Ahora!"
      />
      {/*Arreglar responsive*/}
      <Dates/>
      <Groups/>
      <CourseStructure Weeks={weeks}/>
    </div>
  );
};

export default SchedulesAndCurriculum;