import { useState } from "react";

import CVCreator from "./components/CVCreator/CVCreator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleDisplay from "./components/ToggleDisplay";

function App() {
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

  const [infoEducation, setInfoEducation] = useState({
    school: "",
    schoolCity: "",
    degree: "",
    degreeDescription: "",
    educationYearStart: "",
    educationYearEnd: "",
  });

  return (
    <div className='App'>
      <Header />
      <main>
        <ToggleDisplay />
        <CVCreator
          infoGeneral={infoGeneral}
          setInfoGeneral={setInfoGeneral}
          infoExperience={infoExperience}
          setInfoExperience={setInfoExperience}
          infoEducation={infoEducation}
          setInfoEducation={setInfoEducation}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
