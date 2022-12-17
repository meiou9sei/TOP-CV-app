import React from "react";
import InfoEducation from "./InfoEducation";
import InfoExperience from "./InfoExperience";
import InfoGeneral from "./InfoGeneral";

export default function CVCreator({
  infoGeneral,
  setInfoGeneral,
  infoExperience,
  setInfoExperience,
  infoEducation,
  setInfoEducation,
}) {
  return (
    <form className='CVCreatorForm'>
      <InfoGeneral infoGeneral={infoGeneral} setInfoGeneral={setInfoGeneral} />
      <InfoExperience
        infoExperience={infoExperience}
        setInfoExperience={setInfoExperience}
      />
      <InfoEducation
        infoEducation={infoEducation}
        setInfoEducation={setInfoEducation}
      />
    </form>
  );
}
