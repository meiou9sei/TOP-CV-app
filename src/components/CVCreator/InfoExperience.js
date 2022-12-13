import React from "react";
import AddDeleteInfoSection from "./AddDeleteInfoSection";
import ExperienceUnit from "./units/ExperienceUnit";

export default function InfoExperience() {
  return (
    <section className='InfoExperience'>
      <h2>Experience</h2>
      <ExperienceUnit />
      <AddDeleteInfoSection />
    </section>
  );
}
