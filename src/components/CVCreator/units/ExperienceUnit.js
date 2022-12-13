import React from "react";

export default function ExperienceUnit() {
  return (
    <div className='unit-experience'>
      <div className='form-input'>
        <label htmlFor='company'>Company: </label>
        {/* prettier-ignore */}
        <input type='text' name='company' id='company' placeholder='Ziggs Inc. / Self-Employed / etc.' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='companyCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='companyCity' id='companyCity' placeholder='Piltover / Remote / etc.' required />
      </div>
      <div className='form-input'>
        <label htmlFor='jobTitle'>Title: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobTitle' id='jobTitle' placeholder='Small Explosives Specialist' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='jobDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobDescription' id='jobDescription' placeholder='Handling and overseeing manufacturing of small explosives, field testing, and comitting small crime' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearStart' id='jobYearStart' placeholder='2023' required />
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearEnd' id='jobYearEnd' placeholder='2025 (or write "current")' required />
      </div>
    </div>
  );
}
