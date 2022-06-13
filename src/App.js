import Navbar from "./components/Navbar/index"
import './App.css';
import Home from "./components/Home/index"
import About from "./components/About/index"
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <Home/> 
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;
