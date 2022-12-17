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

  return (
    <div className='App'>
      <Header />
      <main>
        <ToggleDisplay />
        <CVCreator infoGeneral={infoGeneral} setInfoGeneral={setInfoGeneral} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
