import React from 'react';
import ImgAndSubs from './HeroSection';
import Dates from './Dates';
import imageUrl from "../../assets/ticademy/pexels-fauxels-3184405.jpg";

const SchedulesAndCurriculum = () => {
  return (
    <div className="w-screen">
      <ImgAndSubs
        imageUrl={imageUrl}
        heading="Prepárate para tu Futuro"
        paragraph="Programa especializado de preparación para exámenes de admisión universitaria"
        buttonText="¡Inscríbase Ahora!"
      />
      {/*Arreglar responsive*/}
      <Dates/>  
    </div>
  );
};

export default SchedulesAndCurriculum;