import React from "react";

export default function InfoEducation() {
  return (
    <section className='InfoEducation'>
      <h2>Education</h2>
      <div className='form-input'>
        <label htmlFor='school'>School: </label>
        {/* prettier-ignore */}
        <input type='text' name='school' id='school' placeholder='University of Kentucky' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='address'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='city' id='city' placeholder='Lexington' required />
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
    </section>
  );
}
