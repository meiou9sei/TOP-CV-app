import React from "react";
import AddUnit from "./ManageUnitFunctions/AddUnit";
import DeleteUnit from "./ManageUnitFunctions/DeleteUnit";

export default function ManageUnit({ infos, setStateMethod, unitType }) {
  const deleteUnitMethod = (e) => {
    e.preventDefault();
    setStateMethod(infos.slice(0, -1));
  };

  const addUnitMethod = (e) => {
    e.preventDefault();
    let unit;
    switch (unitType) {
      case "education":
        unit = {
          id: new Date().valueOf(),
          school: "",
          schoolCity: "",
          degree: "",
          degreeDescription: "",
          educationYearStart: "",
          educationYearEnd: "",
        };
        break;
      case "experience":
        unit = {
          company: "",
          companyCity: "",
          jobTitle: "",
          jobDescription: "",
          jobYearStart: "",
          jobYearEnd: "",
        };
    }

    setStateMethod(infos.concat(unit));
  };

  return (
    <div className='manage-unit-buttons'>
      <AddUnit addUnitMethod={addUnitMethod} />
      <DeleteUnit deleteUnitMethod={deleteUnitMethod} />
    </div>
  );
}
