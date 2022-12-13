import React from "react";

export default function InfoGeneral() {
  return (
    <section className='InfoGeneral'>
      <h2>General Information</h2>
      <div className='form-input'>
        <label htmlFor='firstName'>First Name:</label>
        {/* prettier-ignore */}
        <input type='text' name='firstName' id='firstName' placeholder='Jane' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='lastName'>Last Name:</label>
        {/* prettier-ignore */}
        <input type='text' name='lastName' id='lastName' placeholder='Doe' required/>
      </div>
      <div className='form-input'>
        <label htmlFor='address'>Address: </label>
        {/* prettier-ignore */}
        <input type='text' name='address' id='address' placeholder='1234 Magical Dr.' required />
      </div>
      <div className='form-input'>
        <label htmlFor='phoneNumber'>Phone Number: </label>
        {/* prettier-ignore */}
        <input type='text' name='phoneNumber' id='phoneNumber' placeholder='1234567890' required />
      </div>
      <div className='form-input'>
        <label htmlFor='email'>E-mail: </label>
        {/* prettier-ignore */}
        <input type='text' name='email' id='email' placeholder='janedoe@example.com' required />
      </div>
      <div className='form-input'>
        <label htmlFor='description'>Description: </label>
        {/* prettier-ignore */}
        <textarea name="description" id="description" cols="30" rows="3" placeholder="Very hard worker, baller" required></textarea>
      </div>
    </section>
  );
}
