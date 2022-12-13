import CVCreator from "./components/CVCreator/CVCreator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleDisplay from "./components/ToggleDisplay";

function App() {
  return (
    <div className='App'>
      <Header />
      <ToggleDisplay />
      <CVCreator />
      <Footer />
    </div>
  );
}

export default App;
