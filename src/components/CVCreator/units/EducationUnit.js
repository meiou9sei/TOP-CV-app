import React from "react";

export default function EducationUnit({
  infoUnit,
  infoEducation,
  setInfoEducation,
}) {
  function inputValueUpdater(e, keyUpdating) {
    setInfoEducation(
      [...infoEducation].map((obj) => {
        if (obj.id === infoUnit.id) {
          return {
            ...infoUnit,
            [keyUpdating]: e.target.value,
          };
        } else return obj;
      })
    );
  }

  return (
    <div className='unit-education'>
      <div className='form-input'>
        <label htmlFor='school'>School: </label>
        {/* prettier-ignore */}
        <input type='text' name='school' id='school' placeholder='University of Kentucky' value={infoUnit.school} onChange={ e => inputValueUpdater(e, 'school') } />
      </div>
      <div className='form-input'>
        <label htmlFor='schoolCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='schoolCity' id='schoolCity' placeholder='Lexington' value={infoUnit.schoolCity} onChange={ e => inputValueUpdater(e, 'schoolCity') } />
      </div>
      <div className='form-input'>
        <label htmlFor='degree'>Degree: </label>
        {/* prettier-ignore */}
        <input type='text' name='degree' id='degree' placeholder='B.S. Destruction and Explosives' value={infoUnit.degree} onChange={ e => inputValueUpdater(e, 'degree') } />
      </div>
      <div className='form-input'>
        <label htmlFor='degreeDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='degreeDescription' id='degreeDescription' placeholder='Small explosives and IEDs specialization track' value={infoUnit.degreeDescription} onChange={ e => inputValueUpdater(e, 'degreeDescription') } />
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearStart' id='educationYearStart' placeholder='2018' value={infoUnit.educationYearStart} onChange={ e => inputValueUpdater(e, 'educationYearStart') } />
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearEnd' id='educationYearEnd' placeholder='2022' value={infoUnit.educationYearEnd} onChange={ e => inputValueUpdater(e, 'educationYearEnd') } />
      </div>
    </div>
  );
}
