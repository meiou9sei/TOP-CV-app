import React from "react";

export default function ExperienceUnit({ infoExperience, setInfoExperience }) {
  return (
    <div className='unit-experience'>
      <div className='form-input'>
        <label htmlFor='company'>Company: </label>
        {/* prettier-ignore */}
        <input type='text' name='company' id='company' placeholder='Ziggs Inc. / Self-Employed / etc.' value={infoExperience.company} onChange={ e => setInfoExperience({...infoExperience, company: e.target.value}) } required/>
      </div>
      <div className='form-input'>
        <label htmlFor='companyCity'>City: </label>
        {/* prettier-ignore */}
        <input type='text' name='companyCity' id='companyCity' placeholder='Piltover / Remote / etc.' value={infoExperience.companyCity} onChange={ e => setInfoExperience({...infoExperience, companyCity: e.target.value}) } required />
      </div>
      <div className='form-input'>
        <label htmlFor='jobTitle'>Title: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobTitle' id='jobTitle' placeholder='Small Explosives Specialist' value={infoExperience.jobTitle} onChange={ e => setInfoExperience({...infoExperience, jobTitle: e.target.value}) } required/>
      </div>
      <div className='form-input'>
        <label htmlFor='jobDescription'>Description: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobDescription' id='jobDescription' placeholder='Handling and overseeing manufacturing of small explosives, field testing, and comitting small crime' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearStart'>Year started: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearStart' id='jobYearStart' placeholder='2023' value={infoExperience.jobYearStart} onChange={ e => setInfoExperience({...infoExperience, jobYearStart: e.target.value}) } required />
      </div>
      <div className='form-input'>
        <label htmlFor='jobYearEnd'>Year ended: </label>
        {/* prettier-ignore */}
        <input type='text' name='jobYearEnd' id='jobYearEnd' placeholder='2025 (or write "current")' value={infoExperience.jobYearEnd} onChange={ e => setInfoExperience({...infoExperience, jobYearEnd: e.target.value}) } required />
      </div>
    </div>
  );
}
