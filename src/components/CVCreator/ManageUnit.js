import React from "react";
import AddUnit from "./ManageUnitFunctions/AddUnit";
import DeleteUnit from "./ManageUnitFunctions/DeleteUnit";

export default function ManageUnit({ infos, setStateMethod }) {
  const deleteUnitMethod = (e) => {
    e.preventDefault();
    setStateMethod(infos.slice(0, -1));
  };

  const addUnitMethod = (e) => {
    e.preventDefault();
    setStateMethod(
      infos.concat({
        id: new Date().valueOf(),
        school: "",
        schoolCity: "",
        degree: "",
        degreeDescription: "",
        educationYearStart: "",
        educationYearEnd: "",
      })
    );
  };

  return (
    <div className='manage-unit-buttons'>
      <AddUnit addUnitMethod={addUnitMethod} />
      <DeleteUnit deleteUnitMethod={deleteUnitMethod} />
    </div>
  );
}
