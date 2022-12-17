import React from "react";
import InfoEducation from "./InfoEducation";
import InfoExperience from "./InfoExperience";
import InfoGeneral from "./InfoGeneral";

export default function CVCreator({ infoGeneral, setInfoGeneral }) {
  return (
    <form className='CVCreatorForm'>
      <InfoGeneral infoGeneral={infoGeneral} setInfoGeneral={setInfoGeneral} />
      <InfoExperience />
      <InfoEducation />
    </form>
  );
}
