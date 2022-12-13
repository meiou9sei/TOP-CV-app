import React from "react";
import InfoEducation from "./InfoEducation";
import InfoGeneral from "./InfoGeneral";

export default function CVCreator() {
  return (
    <form className='CVCreatorForm'>
      <InfoGeneral />
      <InfoEducation />
    </form>
  );
}
