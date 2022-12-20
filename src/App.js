import { useState } from "react";

import CVCreator from "./components/CVCreator/CVCreator";
import CVDisplayer from "./components/CVDisplayer/CVDisplayer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleDisplay from "./components/ToggleDisplay";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const [infoGeneral, setInfoGeneral] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [infoExperience, setInfoExperience] = useState({
    company: "",
    companyCity: "",
    jobTitle: "",
    jobDescription: "",
    jobYearStart: "",
    jobYearEnd: "",
  });

  const [infoEducation, setInfoEducation] = useState([
    {
      id: 1,
      school: "",
      schoolCity: "",
      degree: "",
      degreeDescription: "",
      educationYearStart: "",
      educationYearEnd: "",
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <main>
        <ToggleDisplay setIsEditing={setIsEditing} />
        {isEditing ? (
          <CVCreator
            infoGeneral={infoGeneral}
            setInfoGeneral={setInfoGeneral}
            infoExperience={infoExperience}
            setInfoExperience={setInfoExperience}
            infoEducation={infoEducation}
            setInfoEducation={setInfoEducation}
          />
        ) : (
          <CVDisplayer />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
