import React from "react";

export default function AddUnit({ addUnitMethod }) {
  return (
    <button className='add-info-section-button' onClick={addUnitMethod}>
      Add Another Position
    </button>
  );
}
