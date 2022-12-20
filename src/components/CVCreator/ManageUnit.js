import React from "react";
import AddUnit from "./ManageUnitFunctions/AddUnit";
import DeleteUnit from "./ManageUnitFunctions/DeleteUnit";

export default function ManageUnit({ infos, setStateMethod }) {
  const deleteUnitMethod = (e) => {
    e.preventDefault();
    setStateMethod(infos.slice(0, -1));
  };

  return (
    <div className='manage-unit-buttons'>
      <AddUnit />
      <DeleteUnit deleteUnitMethod={deleteUnitMethod} />
    </div>
  );
}
