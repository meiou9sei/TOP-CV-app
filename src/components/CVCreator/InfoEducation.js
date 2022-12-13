import React from "react";
import AddDeleteInfoSection from "./AddDeleteInfoSection";
import EducationUnit from "./units/EducationUnit";

export default function InfoEducation() {
  return (
    <section className='InfoEducation'>
      <h2>Education</h2>
      <EducationUnit />
      <AddDeleteInfoSection />
    </section>
  );
}
