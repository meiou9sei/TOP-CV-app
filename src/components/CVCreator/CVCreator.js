import React from "react";
import InfoEducation from "./InfoEducation";
import InfoExperience from "./InfoExperience";
import InfoGeneral from "./InfoGeneral";

export default function CVCreator() {
  return (
    <form className='CVCreatorForm'>
      <InfoGeneral />
      <InfoExperience />
      <InfoEducation />
    </form>
  );
}
