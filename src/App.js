import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <hr/>
      <Experience />
      <hr/>
      <Education/>
      <hr/>
      <Skills/>
      <hr/>
      <Interests/>
      <hr/>
      <Portfolio/>
    </div>
  );
}

export default App;
