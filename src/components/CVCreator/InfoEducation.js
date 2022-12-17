import React from "react";
import AddDeleteInfoSection from "./AddDeleteInfoSection";
import EducationUnit from "./units/EducationUnit";

export default function InfoEducation({ infoEducation, setInfoEducation }) {
  return (
    <section className='InfoEducation'>
      <h2>Education</h2>
      <EducationUnit
        infoEducation={infoEducation}
        setInfoEducation={setInfoEducation}
      />
      <AddDeleteInfoSection />
    </section>
  );
}
