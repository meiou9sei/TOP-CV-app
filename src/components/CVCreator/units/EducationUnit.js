import React from "react";

export default function EducationUnit() {
  return (
    <div className='unit-education'>
      <div className='form-input'>
        <label htmlFor='school'>School: </label>
        {/* prettier-ignore */}
        <input type='text' name='school' id='school' placeholder='University of Kentucky' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='schoolCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='schoolCity' id='schoolCity' placeholder='Lexington' required />
      </div>
      <div className='form-input'>
        <label htmlFor='degree'>Degree: </label>
        {/* prettier-ignore */}
        <input type='text' name='degree' id='degree' placeholder='B.S. Destruction and Explosives' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='degreeDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='degreeDescription' id='degreeDescription' placeholder='Small explosives and IEDs specialization track' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearStart' id='educationYearStart' placeholder='2018' required />
      </div>
      <div className='form-input'>
        <label htmlFor='educationYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='educationYearEnd' id='educationYearEnd' placeholder='2022' required />
      </div>
    </div>
  );
}
