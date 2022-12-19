import React from "react";
import ManageUnit from "./ManageUnit";
import EducationUnit from "./units/EducationUnit";

export default function InfoEducation({ infoEducation, setInfoEducation }) {
  return (
    <section className='InfoEducation'>
      <h2>Education</h2>

      {infoEducation.map((infoUnit) => (
        <div className={"education-unit-container"} key={infoUnit.id}>
          <EducationUnit
            infoEducation={infoEducation}
            infoUnit={infoUnit}
            setInfoEducation={setInfoEducation}
          />
          <ManageUnit />
        </div>
      ))}

      {/* <EducationUnit
        infoEducation={infoEducation}
        setInfoEducation={setInfoEducation}
      /> */}
      {/* <ManageUnit /> */}
    </section>
  );
}
