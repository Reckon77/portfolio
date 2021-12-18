import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Achievements from './components/Achievements'
import Header from "./components/Header"
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header/>
      <About />
      <Projects />
      <Skills />
      <Achievements/>
      <Contact />
    </main>
  );
}

export default App;
