
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero_section/Hero';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>


  );
}

export default App;
