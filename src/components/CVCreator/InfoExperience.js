import React from "react";
import ManageUnit from "./ManageUnit";
import ExperienceUnit from "./units/ExperienceUnit";

export default function InfoExperience({ infoExperience, setInfoExperience }) {
  return (
    <section className='info-experience-editor'>
      <h2>Experience</h2>
      {infoExperience.map((infoUnit) => (
        <div className={"experience-unit-container"} key={infoUnit.id}>
          <ExperienceUnit
            infoExperience={infoExperience}
            infoUnit={infoUnit}
            setInfoExperience={setInfoExperience}
          />
        </div>
      ))}
      <ManageUnit
        infos={infoExperience}
        setStateMethod={setInfoExperience}
        unitType={"experience"}
      />
    </section>
  );
}
