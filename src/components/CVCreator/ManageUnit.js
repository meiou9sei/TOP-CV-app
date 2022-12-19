import React from "react";
import AddUnit from "./ManageUnitFunctions/AddUnit";
import DeleteUnit from "./ManageUnitFunctions/DeleteUnit";

export default function AddDeleteInfoSection() {
  return (
    <div className='manage-unit-buttons'>
      <AddUnit />
      <DeleteUnit />
    </div>
  );
}
