import React from "react";

export default function ExperienceUnit({
  infoUnit,
  infoExperience,
  setInfoExperience,
}) {
  function inputValueUpdater(e, keyUpdating) {
    setInfoExperience(
      [...infoExperience].map((obj) => {
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
    <div className='unit-experience'>
      <div className='form-input'>
        <label htmlFor='company'>Company: </label>
        {/* prettier-ignore */}
        <input type='text' name='company' id='company' placeholder='Ziggs Inc. / Self-Employed / etc.' value={infoUnit.company} onChange={ e => inputValueUpdater(e, 'company') } />
      </div>
      <div className='form-input'>
        <label htmlFor='companyCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='companyCity' id='companyCity' placeholder='Piltover / Remote / etc.' value={infoUnit.companyCity} onChange={ e => inputValueUpdater(e, 'companyCity') } />
      </div>
      <div className='form-input'>
        <label htmlFor='jobTitle'>Title: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobTitle' id='jobTitle' placeholder='Small Explosives Specialist' value={infoUnit.jobTitle} onChange={ e => inputValueUpdater(e, 'jobTitle') } />
      </div>
      <div className='form-input'>
        <label htmlFor='jobDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobDescription' id='jobDescription' placeholder='Handling and overseeing manufacturing of small explosives, field testing, and comitting small crime' value={infoUnit.jobDescription} onChange={ e => inputValueUpdater(e, 'jobDescription') } />
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearStart' id='jobYearStart' placeholder='2023' value={infoUnit.jobYearStart} onChange={ e => inputValueUpdater(e, 'jobYearStart') } />
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearEnd' id='jobYearEnd' placeholder='2025 (or write "current")' value={infoUnit.jobYearEnd} onChange={ e => inputValueUpdater(e, 'jobYearEnd') } />
      </div>
    </div>
  );
}
