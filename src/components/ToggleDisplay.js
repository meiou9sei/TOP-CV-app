import React from "react";

export default function ToggleDisplay({ setIsEditing }) {
  return (
    <div>
      <button className='edit-button' onClick={() => setIsEditing(true)}>
        Edit Info
      </button>
      <button className='display-button' onClick={() => setIsEditing(false)}>
        Display CV
      </button>
    </div>
  );
}
