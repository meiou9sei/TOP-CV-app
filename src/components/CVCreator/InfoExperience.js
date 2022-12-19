import React from "react";
import AddDeleteInfoSection from "./ManageUnit";
import ExperienceUnit from "./units/ExperienceUnit";

export default function InfoExperience({ infoExperience, setInfoExperience }) {
  return (
    <section className='InfoExperience'>
      <h2>Experience</h2>
      <ExperienceUnit
        infoExperience={infoExperience}
        setInfoExperience={setInfoExperience}
      />
      <AddDeleteInfoSection />
    </section>
  );
}
