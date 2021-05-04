import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import { useLanguage } from "./context/Language";
import Skills from "./components/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  const {
    state: { data },
  } = useLanguage();
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Intro data={data.intro} />
        <About data={data.about} />
        <Projects data={data.projects} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
