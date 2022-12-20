import React from "react";

export default function CVDisplayer({
  infoGeneral,
  infoExperience,
  infoEducation,
}) {
  return (
    <div className='CV-display-container'>
      <section className='info-general-display'>
        <h2 className='user-name'>
          {infoGeneral.firstName} {infoGeneral.lastName}
        </h2>
        <p>{infoGeneral.address}</p>
        <p>{infoGeneral.phoneNumber}</p>
        <p>{infoGeneral.address}</p>
        <p>{infoGeneral.description}</p>
      </section>
      <section className='info-experience-display'>
        <h2>Experience:</h2>
        {infoExperience.map((infoUnit) => (
          <div className={"info-experience-unit"} key={infoUnit.id}>
            <h3>{infoUnit.company}</h3>
            <div>{infoUnit.companyCity}</div>
            <div>{infoUnit.jobTitle}</div>
            <div>{infoUnit.jobDescription}</div>
            <div>{infoUnit.jobYearStart}</div>
            <div>{infoUnit.jobYearEnd}</div>
          </div>
        ))}
      </section>
      <section className='info-education-display'>
        <h2>Education:</h2>
        {infoEducation.map((infoUnit) => (
          <div className={"info-education-unit"} key={infoUnit.id}>
            <h3>{infoUnit.school}</h3>
            <div>{infoUnit.schoolCity}</div>
            <div>{infoUnit.degree}</div>
            <div>{infoUnit.degreeDescription}</div>
            <div>{infoUnit.educationYearStart}</div>
            <div>{infoUnit.educationYearEnd}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
