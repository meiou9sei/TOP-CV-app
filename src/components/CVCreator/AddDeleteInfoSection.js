import React from "react";

export default function AddDeleteInfoSection() {
  return (
    <div className='add-delete-info-section-buttons'>
      <button className='add-info-section-button'>Add Another Position</button>
      <button className='delete-info-section-button'>
        Delete Last Position
      </button>
    </div>
  );
}
