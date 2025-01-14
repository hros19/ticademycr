import React from 'react';
import HeroSection from './HeroSection';
import Dates from './Dates';
import Groups from './Groups'
import imageUrl from "../../assets/ticademy/pexels-fauxels-3184405.jpg";


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
    </div>
  );
};

export default SchedulesAndCurriculum;