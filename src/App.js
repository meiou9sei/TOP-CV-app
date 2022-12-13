import CVCreator from "./components/CVCreator/CVCreator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleDisplay from "./components/ToggleDisplay";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <ToggleDisplay />
        <CVCreator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
