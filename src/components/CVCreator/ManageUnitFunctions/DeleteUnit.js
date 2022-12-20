import React from "react";

export default function DeleteUnit({ deleteUnitMethod }) {
  return (
    <button className='delete-info-section-button' onClick={deleteUnitMethod}>
      Delete Last Position
    </button>
  );
}
