import React from "react";
import ManageUnit from "./ManageUnit";
import EducationUnit from "./units/EducationUnit";

export default function InfoEducation({ infoEducation, setInfoEducation }) {
  return (
    <section className='info-education-edit'>
      <h2>Education</h2>

      {infoEducation.map((infoUnit) => (
        <div className={"education-unit-container"} key={infoUnit.id}>
          <EducationUnit
            infoEducation={infoEducation}
            infoUnit={infoUnit}
            setInfoEducation={setInfoEducation}
          />
        </div>
      ))}
      <ManageUnit
        infos={infoEducation}
        setStateMethod={setInfoEducation}
        unitType={"education"}
      />
    </section>
  );
}
