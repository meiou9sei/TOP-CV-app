import React from "react";

export default function InfoGeneral({ infoGeneral, setInfoGeneral }) {
  return (
    <section className='info-general-edit'>
      <h2>General Information</h2>
      <div className='form-input'>
        <label htmlFor='firstName'>First Name: </label>
        {/* prettier-ignore */}
        <input type='text' name='firstName' id='firstName' placeholder='Jane' value={infoGeneral.firstName} onChange={ e => setInfoGeneral({...infoGeneral, firstName: e.target.value}) } />
      </div>
      <div className='form-input'>
        <label htmlFor='lastName'>Last Name: </label>
        {/* prettier-ignore */}
        <input type='text' name='lastName' id='lastName' placeholder='Doe' value={infoGeneral.lastName} onChange={ e => setInfoGeneral({...infoGeneral, lastName: e.target.value}) } />
      </div>
      <div className='form-input'>
        <label htmlFor='address'>Address: </label>
        {/* prettier-ignore */}
        <input type='text' name='address' id='address' placeholder='1234 Magical Dr.' value={infoGeneral.address} onChange={ e => setInfoGeneral({...infoGeneral, address: e.target.value}) } />
      </div>
      <div className='form-input'>
        <label htmlFor='phoneNumber'>Phone Number: </label>
        {/* prettier-ignore */}
        <input type='text' name='phoneNumber' id='phoneNumber' placeholder='1234567890' value={infoGeneral.phoneNumber} onChange={ e => setInfoGeneral({...infoGeneral, phoneNumber: e.target.value}) } />
      </div>
      <div className='form-input'>
        <label htmlFor='email'>E-mail: </label>
        {/* prettier-ignore */}
        <input type='text' name='email' id='email' placeholder='janedoe@example.com' value={infoGeneral.email} onChange={ e => setInfoGeneral({...infoGeneral, email: e.target.value}) } />
      </div>
      <div className='form-input'>
        <label htmlFor='description'>Description: </label>
        {/* prettier-ignore */}
        <textarea name="description" id="description" cols="30" rows="3" placeholder="Very hard worker, baller" value={infoGeneral.description} onChange={ e => setInfoGeneral({...infoGeneral, description: e.target.value}) } ></textarea>
      </div>
    </section>
  );
}
