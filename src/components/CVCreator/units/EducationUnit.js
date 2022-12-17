import React from "react";

export default function EducationUnit({ infoEducation, setInfoEducation }) {
  return (
    <div className='unit-education'>
      <div className='form-input'>
        <label htmlFor='school'>School: </label>
        {/* prettier-ignore */}
        <input type='text' name='school' id='school' placeholder='University of Kentucky' value={infoEducation.school} onChange={ e => setInfoEducation({...infoEducation, school: e.target.value}) } required/>
      </div>
      <div className='form-input'>
        <label htmlFor='schoolCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='schoolCity' id='schoolCity' placeholder='Lexington' value={infoEducation.schoolCity} onChange={ e => setInfoEducation({...infoEducation, schoolCity: e.target.value}) } required />
      </div>
      <div className='form-input'>
        <label htmlFor='degree'>Degree: </label>
        {/* prettier-ignore */}
        <input type='text' name='degree' id='degree' placeholder='B.S. Destruction and Explosives' value={infoEducation.degree} onChange={ e => setInfoEducation({...infoEducation, degree: e.target.value}) } required/>
      </div>
      <div className='form-input'>
        <label htmlFor='degreeDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='degreeDescription' id='degreeDescription' placeholder='Small explosives and IEDs specialization track' value={infoEducation.degreeDescription} onChange={ e => setInfoEducation({...infoEducation, degreeDescription: e.target.value}) } required/>
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearStart' id='educationYearStart' placeholder='2018' value={infoEducation.educationYearStart} onChange={ e => setInfoEducation({...infoEducation, educationYearStart: e.target.value}) } required />
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearEnd' id='educationYearEnd' placeholder='2022' value={infoEducation.educationYearEnd} onChange={ e => setInfoEducation({...infoEducation, educationYearEnd: e.target.value}) } required />
      </div>
    </div>
  );
}
